import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HeaderContainer, TitleText, TotalCountText } from './styled';
import { IconAssets } from '../../assets';
import IconButton from '../common/Buttons';
import { Row } from '../common/CommonStyled';
import { COLORS } from '../../constants/Colors';
import { contentsState } from '../../atom/contents';
/**
 * [ 상단 Header ]
 * 뒤로 가기 버튼 + 검색 창
 */
type HeaderProps = {
  title: string;
  totalCount: number;
  handleGoBack?: () => void;
};

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
