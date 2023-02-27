import { atom } from 'recoil';

/**
 * 검색 atom
 */
export const searchWordState = atom<string>({
  key: 'searchWordState',
  default: '',
});
