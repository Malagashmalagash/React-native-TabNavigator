import React from 'react';
import { View , Text , Button } from 'react-native';

export default class LoginScreen extends React.Component{
    render(){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Chat"
                    onPress={() => this.props.navigation.navigate('ChatScreen')}
                />
            </View>
        )
    }
}
