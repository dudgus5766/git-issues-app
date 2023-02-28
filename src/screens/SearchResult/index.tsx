import React from 'react';
import { Text } from 'react-native';
import { Container } from '../../components/common/CommonStyled';
import { useRecoilValue } from 'recoil';
import { searchWordState } from '../../atom/search';
import useContents from '../../hooks/useContents';
import Header from '../../components/Header';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types';

type SearchResultScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'SearchResult'
>;

/**
 * [ 검색 결과 화면 ]
 */
export default function SearchResultScreen({
  navigation,
}: SearchResultScreenNavigationProps) {
  const searchWord = useRecoilValue(searchWordState);

  const { data } = useContents({
    query: searchWord,
    per_page: 10,
    page: 0,
  });

  const onHandleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <Container>
      <Header handleGoBack={onHandleGoBack} />
    </Container>
  );
}
