import {
  Ionicons,
  Entypo,
  EvilIcons,
  Zocial,
  Octicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import CommunityScreen from '../screens/CommunityScreen';
import AlbumScreen from '../screens/AlbumScreen';

import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <EvilIcons name="search" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
       <BottomTab.Screen
        name="Library"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) =><MaterialIcons name="my-library-music" size={24} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Premium"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <Octicons name="file-submodule" size={24} style={{ marginBottom: -3 }}  color={color} />,
        }}
      />

      
       <BottomTab.Screen
        name="Community"
        component={TabCommunityNavigator}
        options={{
          tabBarIcon: ({ color }) => <Zocial name="creativecommons" size={24}  style={{ marginBottom: -3 }}  color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}



// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>

      <TabOneStack.Screen
        name="TabOneScreen"
        component={HomeScreen}
        options={{ headerTitle: '(CIX) Creative International Exposure' }}
      />

      <TabOneStack.Screen
        name="AlbumScreen"
        component={AlbumScreen}
        options={{ headerTitle: 'Album Screen' }}
      />

    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Search Tab' }}
      />
    </TabTwoStack.Navigator>
  );
}


const CommunityTabStack = createStackNavigator<TabTwoParamList>();

function TabCommunityNavigator() {
  return (
    <CommunityTabStack.Navigator>
      <CommunityTabStack.Screen
        name="TabTwoScreen"
        component={CommunityScreen}
        options={{ headerTitle: 'The Community' }}
      />
    </CommunityTabStack.Navigator>
  );
}
