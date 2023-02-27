import React, { useCallback } from 'react';
import {
  PressableProps,
  ViewStyle,
  Pressable as RNPressable,
} from 'react-native';

type Props = PressableProps & {
  children?: React.ReactNode;
  style?: ViewStyle;
};

const activeOpacity = 0.6;

export default function Pressable({ children, style, ...otherProps }: Props) {
  const _style = useCallback(
    ({ pressed }: { pressed: boolean }) => [
      { opacity: pressed ? activeOpacity : 1 },
      style && style,
    ],
    [style, activeOpacity],
  );

  return (
    <RNPressable style={_style} {...otherProps}>
      {children}
    </RNPressable>
  );
}
