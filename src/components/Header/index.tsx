import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import IconButton from '../common/Buttons';
import { COLORS } from '../../constants/Colors';
import { IconAssets } from '../../assets';

import { Row } from '../common/CommonStyled';
import { HeaderContainer, TitleText, TotalCountText } from './styled';

type HeaderProps = {
  title: string;
  totalCount: number;
  handleGoBack?: () => void;
};

/**
 * [ 상단 Header ]
 * 뒤로 가기 버튼 / title
 */
function Header(props: HeaderProps) {
  const { handleGoBack, title, totalCount } = props;
  const { top } = useSafeAreaInsets();

  return (
    <HeaderContainer style={{ paddingTop: top + 5 }}>
      <Row center>
        {handleGoBack && (
          <IconButton
            iconSource={IconAssets.ArrowBack}
            onPress={handleGoBack}
          />
        )}
        <TitleText color={COLORS.MAIN_BLUE} fontSize={20}>
          {title}
        </TitleText>
      </Row>
      <Row center>
        <TotalCountText color={COLORS.SUB_GREY_01} fontSize={15}>
          {'total count: '}
        </TotalCountText>
        <TotalCountText
          color={COLORS.MAIN_BLACK}
          fontSize={15}
          fontWeight={600}
        >
          {totalCount}
        </TotalCountText>
      </Row>
    </HeaderContainer>
  );
}

export default Header;
