import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

class Separator extends Component {
  render() {
    return (
      <View style={styles.container}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.15)',
    marginHorizontal: 8,
    marginTop: 2,
  },
});

export default Separator;
