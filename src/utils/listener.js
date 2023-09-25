import { Animated } from 'react-native';

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

export const listener = {
  focus: () => {
    Animated.timing(av, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  },
};
