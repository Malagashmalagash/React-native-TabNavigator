import React from 'react';
import { View , Text } from 'react-native'
import { createStackNavigator } from 'react-navigation';

import UsersScreen from './Components/UserScreens';

class LoginScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}
const navigationOptions = {
    title: 'coucou',
    initialRouteName: 'Login',
};

const RootStack = createStackNavigator({
    Login: { screen: LoginScreen },
    User: { screen: UsersScreen}
    },
    navigationOptions
);

export default class App extends React.Component{
    render(){
        return(
            <RootStack/>
        );
    }
}

