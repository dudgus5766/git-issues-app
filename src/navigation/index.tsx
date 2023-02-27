import { RootStackParamList, BottomTabParamList } from '../../types';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import SearchResultScreen from '../screens/SearchResult';
import MyRepositoryScreen from '../screens/MyRepository';

/**
 * [ Navigation ]
 */
export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <RootStack.Navigator
      initialRouteName={'BottomTab'}
      screenOptions={{ headerShown: false }}
    >
      <RootStack.Screen name={'BottomTab'} component={BottomTabNavigator} />
      <RootStack.Screen
        name={'SearchResult'}
        component={SearchResultScreen}
        options={{ gestureEnabled: true }}
      />
    </RootStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: false,
      }}
    >
      <BottomTab.Screen
        name={'Home'}
        component={HomeScreen}
        options={{ tabBarLabel: '홈' }}
      />
      <BottomTab.Screen
        name={'MyRepository'}
        component={MyRepositoryScreen}
        options={{ tabBarLabel: '레포지토리' }}
      />
    </BottomTab.Navigator>
  );
}
