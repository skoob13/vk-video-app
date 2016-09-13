import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import Dimensions from 'Dimensions';
const {
  width,
  height
} = Dimensions.get('window');
// localization
import { strings } from '../helpers/localization';

class NoVids extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/confusion/confusion.png')}/>
        <Text style={styles.h2}>{strings.no_videos}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height - 108,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  image: {
    height: 64,
    width: 64,
  },

  h2: {
    marginTop: 12,
    fontSize: 15,
    color: 'rgba(80, 104, 145, 1)',
  },
});

export default NoVids;
