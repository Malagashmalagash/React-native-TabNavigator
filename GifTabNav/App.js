import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import WishListScreen from './Components/WishListScreen';
import ChatListScreen from './Components/ChatScreen';
import FriendListScreen from './Components/FriendList';

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
    FiendList: { screen: FriendListScreen },
    WishList: { screen: WishListScreen },
    Chat: { screen: ChatListScreen }
}, navigationOptions);

export default AppStack;
