import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default class EventsScreen extends Component {
    static navigationOptions = {
        tabBarIcon({ focused }) {
            const icon = focused ? require('../assets/Images/IconsNavigation/friends-icon-doodle-gradient-40x34.png') : require('../assets/Images/IconsNavigation/friends-icon-doodle-black-40x34.png');
            return (
                <View accessibilityLabel={'Events tab'}>
                    <Image source={icon} style={styles.icon} />
                </View>
            );
        }
    };

    render() {
        return (
            <Text>Évènements</Text>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 28
    }
});
