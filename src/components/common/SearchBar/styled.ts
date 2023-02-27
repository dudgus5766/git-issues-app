import styled from 'styled-components/native';
import { SearchBar, TextInput } from '../../common/CommonStyled';

/**
 * [SearchBar]: 검색창 Styled Components
 */
export const SearchBarContainer = styled(SearchBar)<{ isFocused: boolean }>`
  flex-direction: row;
  align-items: center;
  border-radius: 30px;
  padding-horizontal: 15px;
  margin-horizontal: 18px;
`;

export const SearchInput = styled(TextInput)`
  flex: 1;
  padding: 12px;
`;
