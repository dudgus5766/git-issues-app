import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import axios, { AxiosError } from 'axios';

import { ContentsQuery } from '../types';
import { contentsState } from '../atom/contents';
import { getRepository } from '../api/getContents';

export default function useContents(props: ContentsQuery) {
  const { query, per_page, page } = props;
  const [data, set] = useRecoilState(contentsState);

  const isLastPage = (totalCount: number, perPage: number, page: number) => {
    return totalCount <= perPage * page;
  };

  const fetchData = useCallback(async () => {
    set({
      items: null,
      totalCount: 0,
      isLastPage: false,
    });

    try {
      const response = await getRepository({
        query,
        per_page,
        page,
      });

      set({
        items: response.data.items,
        totalCount: response.data.total_count,
        isLastPage: isLastPage(response.data.total_count, per_page, page),
      });
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
        isLastPage: false,
      });
    }
  }, [set]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    refetch: fetchData,
  };
}
