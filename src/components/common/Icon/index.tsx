import * as React from 'react';
import { IconContainer, IconImage } from './styled';
import { IconSourceType } from '../../../types';

type Props = {
  iconSource: IconSourceType;
  iconSize?: number;
};

export default function Icon(props: Props) {
  const { iconSource, iconSize } = props;

  return (
    <IconContainer>
      <IconImage source={iconSource} iconSize={iconSize} />
    </IconContainer>
  );
}
