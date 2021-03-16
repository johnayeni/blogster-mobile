import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from '../screens/PostsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TabBarIcon from '../components/TabBarIcon';
import TabBarLabel from '../components/TabBarLabel';
import Layout from '../constants/Layout';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const tabHeight = Layout.window.height / 8;

  return (
    <Tab.Navigator
      tabBarOptions={{
        style: { height: tabHeight },
        tabStyle: {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around'
        }
      }}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} text="Posts" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="book" />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} text="Profile" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="person" />
          )
        }}
      />
    </Tab.Navigator>
  );
}
