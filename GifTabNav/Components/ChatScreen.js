import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default class ChatScreen extends Component {
  static navigationOptions = {
    tabBarIcon({ focused }) {
      const icon = focused ? require('../assets/Images/IconsNavigation/gifton-icon-doodle-gradient-30x34.png') : require('../assets/Images/IconsNavigation/gifton-icon-doodle-black-30x34.png');
      return (
        <View accessibilityLabel={'Chat tab'}>
          <Image source={icon} style={styles.icon} />
        </View>
      );
    }
  };

  render() {
    return (
      <Text>Chat</Text>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 21
  }
});

