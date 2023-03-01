import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { SubText, Text } from '../../common/CommonStyled';
import Pressable from '../../common/Pressable';
import { COLORS } from '../../../constants/Colors';

export const IssueItemContainer = styled(Pressable)`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-bottom: 5px;
  background-color: ${COLORS.MAIN_WHITE};
`;

export const Thumbnail = styled(FastImage)`
  width: 20px;
  height: 20px;
  border-radius: 30px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  margin-horizontal: 16px;
`;

export const Name = styled(Text)`
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 10px;
`;

export const OwnerName = styled(SubText)`
  margin-left: 5px;
`;
