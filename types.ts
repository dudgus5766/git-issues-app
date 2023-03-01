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
