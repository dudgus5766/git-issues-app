import React from 'react';
import {
  Keyboard,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

import SearchBar from '../../components/common/SearchBar';
import { CenteredContainer, GithubImg } from './styled';
import { ImageAssets } from '../../assets';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabParamList, RootStackParamList } from '../../../types';

type HomeScreenNavigationProps = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>;

/**
 * [ 홈 화면 ]
 */
export default function HomeScreen({ navigation }: HomeScreenNavigationProps) {
  // searchBar에서 submit됐을 때 호출하는 함수
  const onSubmitEditing = () => {
    navigation.push('SearchResult');
  };

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
