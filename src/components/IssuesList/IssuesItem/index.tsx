import React from 'react';

import { View } from '../../common/CommonStyled';
import { COLORS } from '../../../constants/Colors';
import { IssueType } from '../../../types';
import openURL from '../../../constants/utils/openUrl';

import {
  IssueItemContainer,
  Thumbnail,
  InfoContainer,
  Name,
  OwnerName,
  RepoNAme,
} from './styled';

type IssuesItemProps = {
  item: IssueType;
};

/**
 * [ IssuesItem ]
 * 저장된 Repository의 Issue
 */
export default function IssuesItem(props: IssuesItemProps) {
  const { item } = props;

  const getRepoName = () => {
    const splitRepo = item.repository_url.split('/');
    const splitRepoLength = splitRepo.length;
    return `${splitRepo[splitRepoLength - 2]} / ${
      splitRepo[splitRepoLength - 1]
    }`;
  };

  return (
    <IssueItemContainer
      onPress={() => {
        openURL(item.html_url);
      }}
    >
      <InfoContainer>
        <Name numberOfLines={2} ellipsizeMode={'tail'}>
          {item.title}
        </Name>
        <View>
          <OwnerName numberOfLines={1} ellipsizeMode={'tail'}>
            {`#${item.number} opened by ${item.user?.login}`}
          </OwnerName>
          <RepoNAme
            color={COLORS.SUB_GREY_03}
            numberOfLines={1}
            ellipsizeMode={'tail'}
          >
            {`repo: ${getRepoName()}`}
          </RepoNAme>
        </View>
      </InfoContainer>
    </IssueItemContainer>
  );
}
