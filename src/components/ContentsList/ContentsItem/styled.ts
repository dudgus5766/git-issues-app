import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { SubText, Text } from '../../common/CommonStyled';
import { COLORS } from '../../../constants/Colors';

export const ContentsItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  margin-bottom: 5px;
  background-color: ${COLORS.MAIN_WHITE};
`;

export const Thumbnail = styled(FastImage)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  margin-horizontal: 16px;
`;

export const Name = styled(Text)`
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
`;

export const OwnerName = styled(SubText)``;
