import React, { useEffect, useState } from 'react';
import FastImage from 'react-native-fast-image';

import { RepositoryType } from '../../../types';
import Pressable from '../../common/Pressable';
import { ImageAssets } from '../../../assets';
import {
  IssueItemContainer,
  Thumbnail,
  InfoContainer,
  Name,
  OwnerName,
} from './styled';
import IconButton from '../../common/Buttons';
import IconAssets from '../../../assets/icons/IconAssets';
import { useRecoilValue } from 'recoil';
import { repoState } from '../../../atom/contents';
import { Row } from '../../common/CommonStyled';

type IssuesItemProps = {
  item: RepositoryType;
};

export default function IssuesItem(props: IssuesItemProps) {
  const { item } = props;
  const [showDefaultThumbnail, setShowDefaultThumbnail] =
    useState<boolean>(false);

  return (
    <IssueItemContainer>
      <InfoContainer>
        <Name numberOfLines={2} ellipsizeMode={'tail'}>
          {item.title}
        </Name>
        <Row center>
          <Thumbnail
            source={
              showDefaultThumbnail
                ? ImageAssets.DefaultThumb
                : { uri: item.user?.avatar_url }
            }
            resizeMode={FastImage.resizeMode.cover}
            onError={() => {
              setShowDefaultThumbnail(true);
            }}
          />
          <OwnerName numberOfLines={1} ellipsizeMode={'tail'}>
            {item.user?.login}
          </OwnerName>
        </Row>
      </InfoContainer>
    </IssueItemContainer>
  );
}
