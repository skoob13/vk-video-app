import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

const rowHeight = 80;

class Main extends Component {
  static defaultProps = {
    imageSrc: '',
    title: '',
    duration: 0,
    // удалить комменты
    date: 0,
    links: {
      video: 'http://vk.com',
    },
    onPress: ()=>{},
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this._onPress.bind(this)}>
        <View style={styles.container}>
          <View style={styles.imageCont}>
            <Image style={styles.image} source={{uri: this.props.imageSrc}}/>
          </View>
          <View style={styles.descCont}>
            <View style={styles.titleCont}>
              <Text style={styles.h2} numberOfLines={3}>{this.props.title}</Text>
            </View>
            <View style={styles.metaCont}>
              <Text style={[styles.h3, styles.posLeft]} numberOfLines={1}>{this.getRightTime(this.props.duration)}</Text>
              <Text style={[styles.h3, styles.posRight]} numberOfLines={1}>{this.props.date}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  getRightTime(duration) {
    let minutes = Math.floor(duration / 60);
    let seconds = duration - (minutes * 60);
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return minutes + ":" + seconds;
  }

  _onPress() {
    this.props.onPress(this.props);
  }
}

const styles = StyleSheet.create({
  container: {
    height: rowHeight,
    flexDirection: 'row',
    marginRight: 6,
    marginLeft: 8,
    marginTop: 2,
  },

  imageCont: {
    height: rowHeight,
    width: rowHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },

  descCont: {
    flex: 1,
    margin: 2,
  },

  titleCont: {
    flex: 0.7,
    //backgroundColor: 'red',
  },

  metaCont: {
    flex: 0.3,
    //backgroundColor: 'green',
    position: 'relative',
  },

  h2: {
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
  },

  h3: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
  },

  image: {
    width: rowHeight,
    height: rowHeight,
  },

  posLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
  },

  posRight: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default Main;
