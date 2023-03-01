import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import axios, { AxiosError } from 'axios';

import { issuesState, issuesStateType } from '../atom/contents';
import { getIssue } from '../api/getContents';

type useIssuesByRepoProps = {
  query: string;
  per_page: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function useIssuesByRepo(props: useIssuesByRepoProps) {
  const { query, per_page, page, setPage } = props;
  const [data, set] = useRecoilState(issuesState);

  const isLastPage = (totalCount: number, perPage: number, page: number) => {
    return totalCount <= perPage * page;
  };

  const fetchData = useCallback(async () => {
    if (!query) {
      set({
        items: [],
        totalCount: 0,
        isLast: false,
      });
      return;
    }

    if (page === 1) {
      set({
        items: [],
        totalCount: 0,
        isLast: false,
      });
    }

    try {
      const response = await getIssue({
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
        set((state: issuesStateType) => {
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
        items: [],
        totalCount: 0,
        isLast: false,
      });
    }
  }, [query, page]);

  useEffect(() => {
    if (data.isLast) return;
    fetchData();
  }, [page]);

  useEffect(() => {
    setPage(1);
    fetchData();
  }, [query]);

  return {
    data,
    refetch: fetchData,
  };
}
