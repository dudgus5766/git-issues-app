import { StatusBar } from 'react-native';
import { RecoilRoot } from 'recoil';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <RecoilRoot>
        <Navigation />
      </RecoilRoot>
    </SafeAreaProvider>
  );
}
