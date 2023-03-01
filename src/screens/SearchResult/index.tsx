import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { Container } from '../../components/common/CommonStyled';
import {
  useRecoilValue,
  useRecoilValueLoadable,
  useResetRecoilState,
} from 'recoil';
import { searchWordState } from '../../atom/search';
import useContents from '../../hooks/useContents';
import Header from '../../components/Header';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types';
import ContentsList from '../../components/ContentsList';
import { contentsState } from '../../atom/contents';

type SearchResultScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'SearchResult'
>;

const LIMIT = 10;

/**
 * [ 검색 결과 화면 ]
 */
export default function SearchResultScreen({
  navigation,
}: SearchResultScreenNavigationProps) {
  const searchWord = useRecoilValue(searchWordState);
  const resetUserState = useResetRecoilState(contentsState);

  const [page, setPage] = useState<number>(1);
  const { data } = useContents({
    query: searchWord,
    per_page: LIMIT,
    page,
  });

  const onHandleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const onLoadMore = () => {
    if (!data.isLast) {
      setPage(state => state + 1);
    }
  };

  useEffect(() => {
    return () => {
      resetUserState();
    };
  }, []);

  return (
    <Container>
      <Header handleGoBack={onHandleGoBack} />
      <ContentsList data={data.items} onLoadMore={onLoadMore} />
    </Container>
  );
}
