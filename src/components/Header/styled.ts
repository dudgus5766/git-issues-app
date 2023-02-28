import styled from 'styled-components/native';
import { Text, View } from '../common/CommonStyled';

/**
 * [Header]: 스크린 상단 공동 헤더 Styled Components
 */
export const HeaderContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 20px;
  padding-bottom: 15px;
`;

export const SearchWordText = styled(Text)`
  margin-left: 10px;
  font-weight: 600;
`;

export const TotalCountText = styled(Text)``;
