import React, { useState } from 'react';
import {
  MyRepoContainer,
  RepoNameContainer,
  RepoNameTextContainer,
  RepoNameText,
  EmptyText,
  EmptyTextContainer,
} from './styled';
import { useRecoilValue, useRecoilState } from 'recoil';
import Header from '../../components/Header';
import IssuesList from '../../components/IssuesList';
import {
  issuesState,
  repoState,
  repoStateInfoState,
} from '../../atom/contents';
import useIssuesByRepo from '../../hooks/useIssuesByRepo';

import { COLORS } from '../../constants/Colors';
import { Row } from '../../components/common/CommonStyled';

const LIMIT = 10;

/**
 * [ 내 레파지토리 화면 ]
 */
export default function IssuesScreen() {
  const { query } = useRecoilValue(repoStateInfoState);
  const [repo, setRepo] = useRecoilState(repoState);
  const { totalCount } = useRecoilValue(issuesState);
  const [page, setPage] = useState<number>(1);
  const { data } = useIssuesByRepo({
    query: query,
    per_page: LIMIT,
    page,
  });

  const onLoadMore = () => {
    setPage(state => state + 1);
  };

  return (
    <MyRepoContainer>
      <Header title={'Issues'} totalCount={totalCount} />
      <Row>
        <RepoNameContainer horizontal>
          {repo?.map(item => (
            <RepoNameTextContainer>
              <RepoNameText color={COLORS.MAIN_WHITE}>
                {item.repoName}
              </RepoNameText>
            </RepoNameTextContainer>
          ))}
        </RepoNameContainer>
      </Row>
      {repo?.length > 0 ? (
        <IssuesList data={data.items} onLoadMore={onLoadMore} />
      ) : (
        <EmptyTextContainer>
          <EmptyText>{'MY Repository'}</EmptyText>
        </EmptyTextContainer>
      )}
    </MyRepoContainer>
  );
}
