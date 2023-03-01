import { Linking } from 'react-native';

export default function openURL(url: string) {
  if (url) Linking.openURL(url);
}
