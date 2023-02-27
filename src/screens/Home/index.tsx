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

/**
 * [ 홈 화면 ]
 */
export default function HomeScreen() {
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
          <SearchBar />
        </CenteredContainer>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
