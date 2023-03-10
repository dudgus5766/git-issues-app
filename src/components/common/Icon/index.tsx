import * as React from 'react';
import { IconSourceType } from '../../../types';

import { IconContainer, IconImage } from './styled';

type Props = {
  iconSource: IconSourceType;
  iconSize?: number;
};

/**
 * [ Icon ] : 공통 사용 Icon component
 */
export default function Icon(props: Props) {
  const { iconSource, iconSize } = props;

  return (
    <IconContainer>
      <IconImage source={iconSource} iconSize={iconSize} />
    </IconContainer>
  );
}
