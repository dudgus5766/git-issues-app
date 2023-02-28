import { atom } from 'recoil';
import { RepositoryType } from '../types';

/**
 * 콘텐츠 atom
 */
interface ContentsState {
  items: RepositoryType[] | null;
  totalCount: number;
}

export const contentsState = atom<ContentsState>({
  key: 'contentsState',
  default: {
    items: null,
    totalCount: 0,
  },
});
