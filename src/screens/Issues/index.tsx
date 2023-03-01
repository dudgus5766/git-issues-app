import React, { useState, useCallback, useEffect } from 'react';
import {
  MyRepoContainer,
  RepoNameContainer,
  RepoNameTextContainer,
  RepoNameText,
  EmptyText,
  EmptyTextContainer,
} from './styled';
import { useRecoilValue, useRecoilState, useResetRecoilState } from 'recoil';
import Header from '../../components/Header';
import IssuesList from '../../components/IssuesList';
import {
  contentsState,
  issuesState,
  repoState,
  repoStateInfoState,
  repoValue,
} from '../../atom/contents';
import useIssuesByRepo from '../../hooks/useIssuesByRepo';

import { COLORS } from '../../constants/Colors';
import { Row, View } from '../../components/common/CommonStyled';
import IconButton from '../../components/common/Buttons';
import IconAssets from '../../assets/icons/IconAssets';
import { RepositoryType } from '../../types';
import { asyncStorageRemoveItemFromArray } from '../../constants/utils/asyncStorageUtils';
import { AsyncStorageKeys } from '../../constants/EnumTypes';
import { useFocusEffect } from '@react-navigation/native';
import { getIssueQuery } from '../../constants/utils/getIssueQuery';

const LIMIT = 30;

/**
 * [ 내 레파지토리 화면 ]
 */
export default function IssuesScreen() {
  const { query } = useRecoilValue(repoStateInfoState);
  const [repo, setRepo] = useRecoilState(repoState);
  const [issue, setIssue] = useRecoilState(issuesState);
  const resetIssueState = useResetRecoilState(issuesState);
  const [page, setPage] = useState<number>(1);
  const { data } = useIssuesByRepo({
    query: query,
    per_page: LIMIT,
    page,
    setPage,
  });

  const onLoadMore = () => {
    setPage(state => state + 1);
  };

  const onPress = (name: string) => {
    const filteredRepo = repo.filter(
      (repo: repoValue) => repo.repoName !== name,
    );
    setRepo(filteredRepo);
    asyncStorageRemoveItemFromArray(
      AsyncStorageKeys.SAVED_REPOSITORY_KEY,
      name,
    ).then();
  };

  return (
    <MyRepoContainer>
      <Header title={'Issues'} totalCount={data.totalCount} />
      <Row>
        <RepoNameContainer horizontal>
          {repo?.map(item => (
            <RepoNameTextContainer>
              <RepoNameText color={COLORS.MAIN_WHITE}>
                {item.repoName}
              </RepoNameText>
              <IconButton
                iconSource={IconAssets.deleteItem}
                onPress={() => onPress(item.repoName)}
                iconSize={15}
              />
            </RepoNameTextContainer>
          ))}
        </RepoNameContainer>
      </Row>
      {repo.length > 0 ? (
        <IssuesList data={data.items} onLoadMore={onLoadMore} />
      ) : (
        <EmptyTextContainer>
          <EmptyText>{'선택하신 repository가 없습니다.'}</EmptyText>
        </EmptyTextContainer>
      )}
    </MyRepoContainer>
  );
}
