import { useState } from 'react';
import { StyleSheet, Image, Text, View, Alert, Pressable } from 'react-native';
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from 'expo-image-picker';

import { GlobalStyles } from '~/constants';

export default function ImagePicker({ onTakeImage }) {
  const [image, setImage] = useState();
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();

  const _verifyPermission = async () => {
    if (cameraPermission.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestCameraPermission();
      return permissionResponse.granted;
    }
    if (cameraPermission.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient Permissions!',
        'You need to grand camera permission to use this app.',
      );
      return false;
    }
    return true;
  };

  const handleTakeImage = async () => {
    const hasPermission = await _verifyPermission();
    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      // allowsEditing: true,
      // aspect: [16, 9],
      quality: 0.5,
    });

    if (!image.canceled) {
      setImage(image.assets[0]);

      onTakeImage(image.assets[0].uri);
    }
  };

  let imagePreview = (
    <Text style={{ color: GlobalStyles.colors.onSecondaryContainer }}>
      Take image
    </Text>
  );
  if (image) {
    imagePreview = <Image style={styles.image} source={{ uri: image.uri }} />;
  }

  return (
    <Pressable onPress={handleTakeImage}>
      <View style={styles.container}>
        <View style={styles.imagePreview}>{imagePreview}</View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  imagePreview: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.secondaryContainer,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
