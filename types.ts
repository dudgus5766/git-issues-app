import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { NavigatorScreenParams } from '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  BottomTab: NavigatorScreenParams<BottomTabParamList> | undefined;
  SearchResult: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Issues: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
