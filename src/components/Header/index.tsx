import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HeaderContainer, SearchWordText, TotalCountText } from './styled';
import { IconAssets } from '../../assets';
import IconButton from '../common/Buttons';
import { Row } from '../common/CommonStyled';
import { useRecoilValue } from 'recoil';
import { searchWordState } from '../../atom/search';
import { COLORS } from '../../constants/Colors';
import { contentsState } from '../../atom/contents';
/**
 * [ 상단 Header ]
 * 뒤로 가기 버튼 + 검색 창
 */
type HeaderProps = {
  handleGoBack?: () => void;
};

function Header(props: HeaderProps) {
  const { handleGoBack } = props;
  const searchWord = useRecoilValue(searchWordState);
  const { totalCount } = useRecoilValue(contentsState);

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
        {searchWord && (
          <SearchWordText color={COLORS.MAIN_BLUE} fontSize={20}>
            {searchWord}
          </SearchWordText>
        )}
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
