import React, { useState } from 'react';
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
import Save from '../../../assets/icons/save/save.png';
import SaveBorder from '../../../assets/icons/save/save_border.png';

type ContentsItemProps = {
  item: RepositoryType;
};

export default function ContentsItem(props: ContentsItemProps) {
  const { item } = props;

  const [showDefaultThumbnail, setShowDefaultThumbnail] =
    useState<boolean>(false);

  //TODO: repository asyncStorage 저장하기
  console.log('item >>>', item);
  return (
    <ContentsItemContainer>
      {/*<Pressable style={{ flex: 1, flexDirection: 'row' }}>*/}
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
        iconSource={IconAssets.SaveBorder}
        onPress={() => console.log('go to storage!')}
      />
      {/*</Pressable>*/}
    </ContentsItemContainer>
  );
}
