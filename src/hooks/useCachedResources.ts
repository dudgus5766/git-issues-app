import { useEffect, useState } from 'react';
import { asyncStorageGetData } from '../constants/utils/asyncStorageUtils';
import { AsyncStorageKeys } from '../constants/EnumTypes';
import { useRecoilState } from 'recoil';
import { markedRepoState } from '../atom/contents';

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [data, set] = useRecoilState(markedRepoState);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        const result = await asyncStorageGetData(
          AsyncStorageKeys.SAVED_REPOSITORY_KEY,
        );
        if (result) {
          set(result);
        }
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, [isLoadingComplete]);

  return isLoadingComplete;
}
