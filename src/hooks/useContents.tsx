import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import axios, { AxiosError } from 'axios';

import { ContentsQuery } from '../types';
import { contentsState, ContentsStateType } from '../atom/contents';
import { getRepository } from '../api/getContents';

export default function useContents(props: ContentsQuery) {
  const { query, per_page, page } = props;
  const [data, set] = useRecoilState(contentsState);
  const isLastPage = (totalCount: number, perPage: number, page: number) => {
    return totalCount <= perPage * page;
  };

  const fetchData = useCallback(async () => {
    if (page === 1) {
      set({
        items: null,
        totalCount: 0,
        isLast: false,
      });
    }

    try {
      const response = await getRepository({
        query,
        per_page,
        page,
      });

      if (page === 1) {
        set({
          items: response.data.items,
          totalCount: response.data.total_count,
          isLast: isLastPage(response.data.total_count, per_page, page),
        });
      } else {
        set((state: ContentsStateType) => {
          return {
            ...state,
            items: state.items?.concat(response.data.items),
            isLast: isLastPage(response.data.total_count, per_page, page),
          };
        });
      }
    } catch (e) {
      const error = e as Error | AxiosError;
      if (!axios.isAxiosError(error)) {
        // native Error
        console.log('[ERROR] NATIVE ERROR');
      } else {
        // axios Error
        console.log('[ERROR] AXIOS ERROR');
      }

      set({
        items: null,
        totalCount: 0,
        isLast: false,
      });
    }
  }, [set, query, page]);

  useEffect(() => {
    if (data.isLast) return;
    fetchData();
  }, [query, page]);

  return {
    data,
    refetch: fetchData,
  };
}
