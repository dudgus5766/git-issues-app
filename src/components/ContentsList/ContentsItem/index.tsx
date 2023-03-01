import React, { useEffect, useState } from 'react';
import FastImage from 'react-native-fast-image';

import { RepositoryType } from '../../../types';
import Pressable from '../../common/Pressable';
import { ImageAssets } from '../../../assets';
import {
  ContentsItemContainer,
  Thumbnail,
  InfoContainer,
  Name,
  OwnerName,
} from './styled';
import IconButton from '../../common/Buttons';
import IconAssets from '../../../assets/icons/IconAssets';
import {
  asyncStorageGetData,
  asyncStorageStoreArrayData,
} from '../../../constants/utils/asyncStorageUtils';
import { AsyncStorageKeys } from '../../../constants/EnumTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useIsMarked from '../../../hooks/useIsMarked';
import { useRecoilValue } from 'recoil';
import { repoState } from '../../../atom/contents';

type ContentsItemProps = {
  item: RepositoryType;
};

export default function ContentsItem(props: ContentsItemProps) {
  const { item } = props;
  const data = useRecoilValue(repoState);
  const { isMarked, saveRepository, deleteRepository } = useIsMarked({ item });
  const [showDefaultThumbnail, setShowDefaultThumbnail] =
    useState<boolean>(false);

  const onChangeMark = async () => {
    if (data.length >= 4 && !isMarked) return;
    if (!isMarked) {
      saveRepository(item);
    } else {
      deleteRepository(item.name);
    }
  };

  return (
    <ContentsItemContainer>
      <Thumbnail
        source={
          showDefaultThumbnail
            ? ImageAssets.DefaultThumb
            : { uri: item.owner?.avatar_url }
        }
        resizeMode={FastImage.resizeMode.cover}
        onError={() => {
          setShowDefaultThumbnail(true);
        }}
      />
      <InfoContainer>
        <Name numberOfLines={2} ellipsizeMode={'tail'}>
          {item.name || item.full_name}
        </Name>
        <OwnerName>{item.owner?.login}</OwnerName>
      </InfoContainer>
      <IconButton
        iconSource={!isMarked ? IconAssets.SaveBorder : IconAssets.Save}
        onPress={onChangeMark}
      />
    </ContentsItemContainer>
  );
}
