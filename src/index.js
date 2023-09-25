import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';

import App from './App';
import { StoreProvider } from './contexts';

registerRootComponent(() => {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  );
});
