import React, { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { IssueType } from '../../types';
import IssuesItem from './IssuesItem';
import { EmptyText, EmptyTextContainer } from '../../screens/Issues/styled';

type IssuesListProps = {
  data: IssueType[] | null;
  onLoadMore: () => void;
};

/**
 * [ IssuesList ]
 * 저장된 Repository의 Issue 리스트
 */
export default function IssuesList(props: IssuesListProps) {
  const { data, onLoadMore } = props;

  const renderItem: ListRenderItem<IssueType> = ({ item }) => (
    <IssuesItem item={item} />
  );

  const listEmptyComponent = () => (
    <EmptyTextContainer>
      <EmptyText>{'선택하신 repository에 Issue가 없습니다.'}</EmptyText>
    </EmptyTextContainer>
  );

  const keyExtractor = useCallback((item: IssueType) => `Repo ${item.id}`, []);

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
