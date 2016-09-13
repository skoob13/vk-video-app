import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

class Toolbar extends Component {
  static defaultProps = {
    onIconPress: ()=>{},
    iconSrc: {},
    title: "VK Video App",
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
           backgroundColor="rgba(80, 104, 145, 1)"
           barStyle="light-content"
        />
        <View style={styles.equalSides}>
          <TouchableOpacity activeOpacity={0.9} onPress={this.props.onIconPress}>
            <Image style={styles.icon} source={this.props.iconSrc}/>
          </TouchableOpacity>
        </View>
        <View style={styles.inside}>
          <Text style={styles.h1}>{this.props.title}</Text>
        </View>
        <View style={styles.equalSides}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 58,
    backgroundColor: 'rgba(80, 104, 145, 1)',
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingTop: 20,
  },

  equalSides: {
    width: 50,
    justifyContent: 'center',
  },

  icon: {
    width: 20,
    height: 20,
  },

  inside: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  h1: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default Toolbar;
