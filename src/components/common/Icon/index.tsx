import * as React from 'react';
import { IconContainer, IconImage } from './styled';

type Props = {
  iconSource: any;
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
