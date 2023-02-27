import React from 'react';
import {
  Keyboard,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

/**
 * [ 내 레파지토리 화면 ]
 */
export default function MyRepositoryScreen() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Text>{'MY Repository'}</Text>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
