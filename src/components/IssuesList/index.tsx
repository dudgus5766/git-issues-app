import React, { useCallback } from 'react';
import { FlatList, ListRenderItem, Text } from 'react-native';

import { RepositoryType } from '../../types';
import IssuesItem from './IssuesItem';
import { EmptyText, EmptyTextContainer } from '../../screens/Issues/styled';

type IssuesListProps = {
  data: RepositoryType[] | null;
  onLoadMore: () => void;
};

export default function IssuesList(props: IssuesListProps) {
  const { data, onLoadMore } = props;

  const renderItem: ListRenderItem<RepositoryType> = ({ item }) => (
    <IssuesItem item={item} />
  );
  const listEmptyComponent = () => (
    <EmptyTextContainer>
      <EmptyText>{'선택하신 repository에 Issue가 없습니다.'}</EmptyText>
    </EmptyTextContainer>
  );
  const keyExtractor = useCallback(
    (item: RepositoryType) => `Repo ${item.id}`,
    [],
  );

  return (
    <FlatList
      removeClippedSubviews
      initialNumToRender={10}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={{ marginTop: 5 }}
      ListEmptyComponent={listEmptyComponent}
      onEndReached={onLoadMore}
    />
  );
}
