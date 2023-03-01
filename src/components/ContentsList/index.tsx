import React, { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { RepositoryType } from '../../types';
import ContentsItem from './ContentsItem';
import { EmptyText, EmptyTextContainer } from '../../screens/Issues/styled';

type ContentsListProps = {
  data: RepositoryType[] | null;
  onLoadMore: () => void;
};

export default function ContentsList(props: ContentsListProps) {
  const { data, onLoadMore } = props;

  const renderItem: ListRenderItem<RepositoryType> = ({ item }) => (
    <ContentsItem item={item} />
  );

  const keyExtractor = useCallback(
    (item: RepositoryType) => `Repo ${item.id}`,
    [],
  );

  const listEmptyComponent = () => (
    <EmptyTextContainer>
      <EmptyText>{'검색된 repository가 없습니다.'}</EmptyText>
    </EmptyTextContainer>
  );

  return (
    <FlatList
      removeClippedSubviews
      initialNumToRender={10}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={{ marginTop: 5 }}
      onEndReached={onLoadMore}
      ListEmptyComponent={listEmptyComponent}
    />
  );
}
