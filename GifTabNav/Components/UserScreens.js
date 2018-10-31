import React from 'react';
import {} from 'react-native'
import { createBottomTabNavigator } from 'react-navigation';

import WishListScreen from './WishListScreen';
import ChatListScreen from './ChatScreen';
import FriendListScreen from './FriendList';

const navigationOptions = {
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        style: {
            backgroundColor: 'white',
        },
        tabStyle: {
            padding: 10,
        },
        indicatorStyle: {
            backgroundColor: '#ffa296',
        },
        iconStyle: {
            height: 24,
            width: 52,
        },
    },
};

const AppStack = createBottomTabNavigator({
    WishList: { screen: WishListScreen },
    FiendList: { screen: FriendListScreen },
    Chat: { screen: ChatListScreen }
}, navigationOptions);

export default AppStack;
