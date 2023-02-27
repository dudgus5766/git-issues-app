import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const LAYOUT = {
  width: width,
  height: height,
  isSmallDevice: width < 375,
};
