import React, { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { RepositoryType } from '../../types';
import ContentsItem from './ContentItem';

type ContentsListProps = {
  data: RepositoryType[] | null;
};

export default function ContentsList(props: ContentsListProps) {
  const { data } = props;
  console.log('data >>>', data);
  const renderItem: ListRenderItem<RepositoryType> = useCallback(
    ({ item }) => <ContentsItem item={item} />,
    [data],
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
      // onEndReached={onLoadMore}
    />
  );
}
