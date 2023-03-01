import React, { useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';

import Header from '../../components/Header';
import IssuesList from '../../components/IssuesList';
import {
  markedRepoState,
  markedRepoInfoState,
  MarkedRepoValue,
} from '../../atom/contents';
import useIssuesByRepo from '../../hooks/useIssuesByRepo';

import IconButton from '../../components/common/Buttons';
import { asyncStorageRemoveItemFromArray } from '../../constants/utils/asyncStorageUtils';
import { AsyncStorageKeys } from '../../constants/EnumTypes';
import { COLORS } from '../../constants/Colors';
import IconAssets from '../../assets/icons/IconAssets';

import { Row } from '../../components/common/CommonStyled';
import {
  MyRepoContainer,
  RepoNameContainer,
  RepoNameTextContainer,
  RepoNameText,
  EmptyText,
  EmptyTextContainer,
} from './styled';

const LIMIT = 30;

/**
 * [ 내 레파지토리 화면 ]
 */
export default function IssuesScreen() {
  const { query } = useRecoilValue(markedRepoInfoState);
  const [repos, setRepos] = useRecoilState(markedRepoState);
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

  const deleteRepo = (name: string) => {
    const filteredRepo = repos.filter(
      (repo: MarkedRepoValue) => repo.repoName !== name,
    );
    setRepos(filteredRepo);
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
          {repos?.map(item => (
            <RepoNameTextContainer key={`Repo: ${item.repoName}`}>
              <RepoNameText color={COLORS.MAIN_WHITE}>
                {item.repoName}
              </RepoNameText>
              <IconButton
                iconSource={IconAssets.deleteItem}
                onPress={() => deleteRepo(item.repoName)}
                iconSize={15}
              />
            </RepoNameTextContainer>
          ))}
        </RepoNameContainer>
      </Row>
      {repos.length > 0 ? (
        <IssuesList data={data.items} onLoadMore={onLoadMore} />
      ) : (
        <EmptyTextContainer>
          <EmptyText>{'선택하신 repository가 없습니다.'}</EmptyText>
        </EmptyTextContainer>
      )}
    </MyRepoContainer>
  );
}
