import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Image,
  Easing
} from 'react-native';
import Dimensions from 'Dimensions';
const {
  width,
  height
} = Dimensions.get('window');

const TIMES = 400;

class Spinner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      angle: new Animated.Value(0),
    };
  }

  componentDidMount() {
    // Отключено, потому что редукс багает
    //this._animate();
  }

  _animate() {
    this.state.angle.setValue(0);
    this._anim = Animated.timing(this.state.angle, {
      toValue: 360*TIMES,
      duration: 800*TIMES,
      easing:  Easing.linear,
    }).start(this._animate);
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.Image
          style={[styles.image, {
            transform: [{
              rotate: this.state.angle.interpolate({
              inputRange: [0, 360],
              outputRange: ['0deg', '360deg']
            })},
          ]}]}
          // Пока есть баг с реактом, юзается просто гифка
          source={require('../assets/spinner/spinner.gif')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height - 88,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    height: 48,
    width: 48,
  },

  h2: {
    marginTop: 12,
    fontSize: 15,
    color: 'rgba(80, 104, 145, 1)',
  },
});

export default Spinner;
