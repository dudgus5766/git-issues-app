import React from 'react';
import { Text } from 'react-native';
import { Container } from '../../components/common/CommonStyled';
import { useRecoilState, useRecoilValue } from 'recoil';
import { searchWordState } from '../../atom/search';
import useContents from '../../hooks/useContents';

/**
 * [ 검색 결과 화면 ]
 */
export default function SearchResultScreen() {
  const searchWord = useRecoilValue(searchWordState);

  const { data } = useContents({
    query: searchWord,
    per_page: 10,
    page: 0,
  });

  console.log('data>>>', data);

  return (
    <Container>
      <Text>{'Search Result'}</Text>
    </Container>
  );
}
