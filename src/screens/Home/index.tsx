import React, { useCallback } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { useSetRecoilState } from 'recoil';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CompositeScreenProps, useFocusEffect } from '@react-navigation/native';

import SearchBar from '../../components/common/SearchBar';
import { ImageAssets } from '../../assets';
import { searchWordState } from '../../atom/search';
import { BottomTabParamList, RootStackParamList } from '../../../types';

import { CenteredContainer, GithubImg } from './styled';

type HomeScreenNavigationProps = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>;

/**
 * [ 홈 화면 ]
 */
export default function HomeScreen({ navigation }: HomeScreenNavigationProps) {
  const setSearchWord = useSetRecoilState(searchWordState);

  // searchBar에서 submit됐을 때 호출하는 함수
  const onSubmitEditing = () => {
    navigation.push('SearchResult');
  };

  // 홈으로 돌아오면 searchWord 초기화
  useFocusEffect(
    useCallback(() => {
      setSearchWord('');
    }, []),
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <CenteredContainer>
          <GithubImg
            source={ImageAssets.GithubCharacterImage}
            resizeMode={'contain'}
          />
          <SearchBar onSubmitEditing={onSubmitEditing} />
        </CenteredContainer>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
