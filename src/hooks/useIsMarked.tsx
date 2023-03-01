import { useEffect, useState } from 'react';
import {
  asyncStorageRemoveItemFromArray,
  asyncStorageStoreArrayData,
} from '../constants/utils/asyncStorageUtils';
import { AsyncStorageKeys } from '../constants/EnumTypes';
import { useRecoilState } from 'recoil';
import { RepoStateType, repoState } from '../atom/contents';
import { RepositoryType } from '../types';

type useIsMarkedProps = {
  item: RepositoryType;
};

export default function useIsMarked({ item }: useIsMarkedProps) {
  const [isMarked, setIsMarked] = useState(false);
  const [data, set] = useRecoilState(repoState);

  const saveRepository = (repo: RepositoryType) => {
    const repoData = {
      repoName: repo.name,
      ownerName: repo.owner?.login,
    };

    set((state: RepoStateType) => state.concat(repoData));
    asyncStorageStoreArrayData(
      AsyncStorageKeys.SAVED_REPOSITORY_KEY,
      repoData,
    ).then();
    setIsMarked(true);
  };

  const deleteRepository = (name: string) => {
    const filteredRepo = data.filter(
      (repo: RepositoryType) => repo.repoName !== name,
    );
    set(filteredRepo);
    asyncStorageRemoveItemFromArray(
      AsyncStorageKeys.SAVED_REPOSITORY_KEY,
      name,
    ).then();
    setIsMarked(false);
  };

  useEffect(() => {
    const isExist = data?.findIndex(
      (repo: RepositoryType) => repo.ownerName === item.name,
    );

    if (isExist !== -1) {
      setIsMarked(true);
    }
  }, [item]);

  return { isMarked, saveRepository, deleteRepository };
}
