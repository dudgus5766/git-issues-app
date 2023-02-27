import { StatusBar } from 'react-native';
import { RecoilRoot } from 'recoil';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <RecoilRoot>
        <Navigation />
      </RecoilRoot>
    </SafeAreaProvider>
  );
}
