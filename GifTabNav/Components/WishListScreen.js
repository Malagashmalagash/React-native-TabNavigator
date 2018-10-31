import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default class WishlistScreen extends Component {
    static navigationOptions = {
        tabBarIcon({ focused }) {
            const icon = focused ? require('../assets/Images/IconsNavigation/wishlist-icon-doodle-gradient-34x34.png') : require('../assets/Images/IconsNavigation/wishlist-icon-doodle-black-34x34.png');
            return (
                <View accessibilityLabel={'Wishlist tab'}>
                    <Image source={icon} style={styles.icon} />
                </View>
            );
        }
    };

    render() {
        return (
            <Text>Wishlist</Text>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    }
});
