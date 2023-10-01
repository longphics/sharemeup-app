import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setKey(key, value) {
  return await AsyncStorage.setItem(key, value);
}

export async function getKey(key) {
  return await AsyncStorage.getItem(key);
}

export async function removeKey(key) {
  return await AsyncStorage.removeItem(key);
}
