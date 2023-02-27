import { atom } from 'recoil';

/**
 * 콘텐츠 atom
 */
interface ContentsState {
  items: any;
  totalCount: number;
}

export const contentsState = atom<ContentsState>({
  key: 'contentsState',
  default: {
    items: null,
    totalCount: 0,
  },
});
