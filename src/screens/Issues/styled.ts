import styled from 'styled-components/native';
import { Container, SubText, Text } from '../../components/common/CommonStyled';
import Pressable from '../../components/common/Pressable';
import { COLORS } from '../../constants/Colors';
import { HorizontalScrollView } from '../../components/common/CommonStyled/themed';

export const MyRepoContainer = styled.View``;
export const RepoNameContainer = styled.ScrollView`
  flex: 1;
  padding-horizontal: 20px;
  padding-vertical: 10px;
  background-color: ${COLORS.MAIN_WHITE};
`;

export const RepoNameTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.MAIN_BLUE};
  padding-horizontal: 10px;
  padding-vertical: 5px;
  margin-right: 10px;
  border-radius: 10px;
`;

export const RepoNameText = styled(Text)``;

export const EmptyTextContainer = styled.View`
  flex: 1;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled(SubText)``;
