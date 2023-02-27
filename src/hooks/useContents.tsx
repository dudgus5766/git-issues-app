import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import axios, { AxiosError } from 'axios';

import { ContentsQuery } from '../types';
import { contentsState } from '../atom/contents';
import { getRepository } from '../api/getContents';

export default function useContents(props: ContentsQuery) {
  const { query, per_page, page } = props;
  console.log('props>>>', props);
  const [data, set] = useRecoilState(contentsState);
  console.log('data', data);
  const fetchData = useCallback(async () => {
    set({
      items: null,
      totalCount: 0,
    });

    console.log('refetch!!!!!!!>>>');
    console.log('query!!!!!!!>>>', query);

    try {
      const response = await getRepository({
        query,
        per_page,
        page,
      });

      console.log('response>>>', response);

      set({
        items: response.data.items,
        totalCount: response.data.total_count,
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
