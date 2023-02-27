import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';

export const CenteredContainer = styled(SafeAreaView)`
  flex: 1;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const GithubImg = styled(FastImage)`
  width: 200px;
  height: 150px;
`;
