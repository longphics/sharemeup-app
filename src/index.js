import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { PaperProvider, MD3LightTheme } from 'react-native-paper';

import App from './App';
import { StoreProvider } from './contexts';
import { GlobalStyles } from './constants';

registerRootComponent(() => {
  const theme = {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      ...GlobalStyles.colors,
    },
  };

  return (
    <StoreProvider>
      <PaperProvider>
        <App />
      </PaperProvider>
    </StoreProvider>
  );
});
