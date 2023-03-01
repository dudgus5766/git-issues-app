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

type repoValue = { repoName: string; ownerName: string };

export type RepoStateType = repoValue[];

export const repoState = atom<RepoStateType>({
  key: 'repoState',
  default: [],
});

export const repoStateInfoState = selector({
  key: 'repoStateInfoState',
  get: ({ get }) => {
    const repoList = get(repoState);

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
  isLast: boolean; // 마지막 데이터인지, loadMore 여부 확인용
};

export const issuesState = atom<issuesStateType>({
  key: 'contentsState',
  default: {
    items: null,
    totalCount: 0,
    isLast: false,
  },
});
