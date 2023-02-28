import { atom } from 'recoil';
import { RepositoryType } from '../types';

/**
 * 콘텐츠 atom
 */
type ContentsState = {
  items: RepositoryType[] | null;
  totalCount: number;
  isLastPage: boolean; // 마지막 데이터인지, loadMore 여부 확인용
};

export const contentsState = atom<ContentsState>({
  key: 'contentsState',
  default: {
    items: null,
    totalCount: 0,
    isLastPage: false,
  },
});
