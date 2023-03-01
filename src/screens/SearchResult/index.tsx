import React, { useState, useEffect } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Container } from '../../components/common/CommonStyled';
import Header from '../../components/Header';
import ContentsList from '../../components/ContentsList';
import useContents from '../../hooks/useContents';
import { searchWordState } from '../../atom/search';
import { contentsState } from '../../atom/contents';
import { RootStackParamList } from '../../../types';

type SearchResultScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'SearchResult'
>;

const LIMIT = 20;

/**
 * [ 검색 결과 화면 ]
 */
export default function SearchResultScreen({
  navigation,
}: SearchResultScreenNavigationProps) {
  const searchWord = useRecoilValue(searchWordState);
  const { totalCount } = useRecoilValue(contentsState);
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
      <Header
        handleGoBack={onHandleGoBack}
        totalCount={totalCount}
        title={searchWord}
      />
      <ContentsList data={data.items} onLoadMore={onLoadMore} />
    </Container>
  );
}
