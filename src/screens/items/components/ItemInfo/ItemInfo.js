import { StyleSheet, View, Image } from 'react-native';
import { Text } from 'react-native-paper';

import { GlobalStyles } from '~/constants';
import { Icon, Stars, VerticalLine } from '~/components';
import { formatDate } from '~/utils';

export default function ItemInfo({
  name,
  image,
  star,
  sold,
  stock,
  description,
  expired,
  createAt,
  filters,
  options,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.line1}>
          <Text variant="titleLarge" style={styles.text}>
            {name}
          </Text>
        </View>
        <View style={styles.line2}>
          <Stars star={star} size={20} style={{ marginRight: 6 }} />
          <Text style={[styles.text, styles.fadeText]}>
            {parseFloat(star).toFixed(1)}
          </Text>
          <VerticalLine />
          <Text style={styles.text}>{sold} sold</Text>
          <Text style={(styles.text, { flex: 3, textAlign: 'right' })}>
            Stock: {stock}
          </Text>
        </View>
        <View style={styles.line3}>
          <Text variant="bodyMedium" style={styles.text}>
            Description: {description}
          </Text>
        </View>
        {filters.map((filter) => {
          return (
            <View style={styles.line3} key={filter.id}>
              <Text variant="bodyMedium" style={styles.text}>
                {filter.name}:
                {options
                  .filter((option) => option.filterId === filter.id)
                  .map((value) => ' ' + value.name)}
              </Text>
            </View>
          );
        })}

        <View style={styles.line4}>
          <View style={styles.line4Left}>
            <Icon
              name="calendar"
              color={GlobalStyles.colors.onSurface}
              size={20}
              style={{ marginRight: 6 }}
            />
            <Text variant="bodyMedium" style={styles.text}>
              Expired: {formatDate(expired)}
            </Text>
          </View>
          <View style={styles.line4Right}>
            <Text variant="bodyMedium" style={[styles.text, { opacity: 0.5 }]}>
              Created: {formatDate(createAt)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
  infoContainer: {
    paddingBottom: 10,
    overflow: 'hidden',
    borderRadius: 20,
    backgroundColor: GlobalStyles.colors.surfaceContainerLow,
  },
  image: {
    width: '100%',
    height: 400,
  },
  line1: {
    marginTop: 10,
    marginHorizontal: 12,
  },
  line2: {
    marginHorizontal: 12,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  line3: {
    marginHorizontal: 12,
    marginTop: 8,
  },
  line4: {
    marginHorizontal: 12,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  line4Left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line4Right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: GlobalStyles.colors.onSurface,
  },
});
