import styled from 'styled-components/native';
import { SubText, Text } from '../../components/common/CommonStyled';
import { COLORS } from '../../constants/Colors';

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

export const RepoNameText = styled(Text)`
  margin-right: 6px;
`;

export const EmptyTextContainer = styled.View`
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled(SubText)``;
