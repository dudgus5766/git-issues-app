import React from 'react';
import {
  Keyboard,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

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
        <Text>{'Home'}</Text>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
