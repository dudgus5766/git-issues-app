import React, { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { RepositoryType } from '../../types';
import ContentsItem from './ContentsItem';

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

  const getItemLayout = () => {};

  return (
    <FlatList
      removeClippedSubviews
      initialNumToRender={10}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={{ marginTop: 5 }}
      // getItemLayout={getItemLayout}
      onEndReached={onLoadMore}
    />
  );
}
