import { atom, selector } from 'recoil';
import { IssueType, RepositoryType } from '../types';

/**
 * 콘텐츠 atom
 */
export type ContentsStateType = {
  items: RepositoryType[] | null;
  totalCount: number;
  isLast: boolean; // 마지막 데이터인지, loadMore 여부 확인용
};

export const contentsState = atom<ContentsStateType>({
  key: 'contentsState',
  default: {
    items: null,
    totalCount: 0,
    isLast: false,
  },
});

export type MarkedRepoValue = { repoName: string; ownerName: string };
export type MarkedRepoStateType = MarkedRepoValue[];

export const markedRepoState = atom<MarkedRepoStateType>({
  key: 'markedRepoState',
  default: [],
});

export const markedRepoInfoState = selector({
  key: 'markedRepoInfoState',
  get: ({ get }) => {
    const repoList = get(markedRepoState);

    let query = '';
    repoList.forEach(repository => {
      const { repoName, ownerName } = repository;
      query += ` repo:${ownerName}/${repoName}`;
    });

    const repoLength = repoList.length;

    return {
      query,
      repoLength,
    };
  },
});

export type issuesStateType = {
  items: IssueType[] | null;
  totalCount: number;
  isLast: boolean;
};

export const issuesState = atom<issuesStateType>({
  key: 'issuesState',
  default: {
    items: null,
    totalCount: 0,
    isLast: false,
  },
});
