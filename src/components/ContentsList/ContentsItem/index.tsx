import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import FastImage from 'react-native-fast-image';

import IconButton from '../../common/Buttons';
import { markedRepoInfoState } from '../../../atom/contents';
import { ImageAssets } from '../../../assets';
import IconAssets from '../../../assets/icons/IconAssets';
import useIsMarked from '../../../hooks/useIsMarked';
import { RepositoryType } from '../../../types';

import {
  ContentsItemContainer,
  Thumbnail,
  InfoContainer,
  Name,
  OwnerName,
} from './styled';

type ContentsItemProps = {
  item: RepositoryType;
};

export default function ContentsItem(props: ContentsItemProps) {
  const { item } = props;
  const { repoLength } = useRecoilValue(markedRepoInfoState);
  const { isMarked, saveRepository, deleteRepository } = useIsMarked({ item });
  const [showDefaultThumbnail, setShowDefaultThumbnail] =
    useState<boolean>(false);

  const onChangeMark = async () => {
    if (repoLength >= 4 && !isMarked) return;
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
