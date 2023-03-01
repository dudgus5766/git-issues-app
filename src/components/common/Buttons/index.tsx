import * as React from 'react';
import { GestureResponderEvent } from 'react-native';

import Icon from '../Icon';
import Pressable from '../Pressable';
import { IconSourceType } from '../../../types';

import { IconButtonContainer } from './styled';

/**
 * [ Buttons ]
 * - IconButton: 아이콘 버튼
 */
type IconButtonProps = {
  iconSource: IconSourceType;
  onPress: (event: GestureResponderEvent) => void;
  noMargin?: boolean;
  iconSize?: number;
};

export default function IconButton(props: IconButtonProps) {
  return (
    <IconButtonContainer>
      <Pressable onPress={props.onPress}>
        <Icon {...props} />
      </Pressable>
    </IconButtonContainer>
  );
}
