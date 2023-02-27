import React, { useState } from 'react';
import Icon from '../Icon';
import IconButton from '../Buttons';

import { SearchBarContainer, SearchInput } from './styled';
import IconAssets from '../../../assets/icons/IconAssets';

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchWord, setSearchWord] = useState('');

  // 클리어 버튼 - 검색어 지우기
  const onPressClearButton = () => {
    setSearchWord('');
  };

  return (
    <SearchBarContainer isFocused={isFocused}>
      <Icon
        iconSource={isFocused ? IconAssets.Search : IconAssets.SearchGrey}
      />
      <SearchInput
        placeholder={'검색어를 입력하세요'}
        returnKeyType={'search'}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={searchWord}
        onChangeText={setSearchWord}
      />
      {searchWord && (
        <IconButton
          iconSource={IconAssets.Close}
          onPress={onPressClearButton}
        />
      )}
    </SearchBarContainer>
  );
}
