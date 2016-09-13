import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Switch
} from 'react-native';

class NoSearch extends Component {
  static defaultProps = {
      value: false,
      text: "",
      onValueChange: ()=>{},
  }

  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <Text style={styles.h2}>{this.props.text}</Text>
        </View>
        <View style={styles.right}>
          <Switch
            onValueChange={this._onValueChange.bind(this)}
            value={this.state.value}
          />
        </View>
      </View>
    );
  }

  _onValueChange(value) {
    this.setState({value: value});
    this.props.onValueChange(value);
  }
}

const styles = StyleSheet.create({
  container: {
    height: 42,
    flexDirection: 'row',
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },

  left: {
    flex: 1,
    justifyContent: 'center',
  },

  right: {
    width: 51,
    justifyContent: 'center',
  },

  h2: {
    fontSize: 16,
    color: 'black',
    opacity: 0.9,
  },
});

export default NoSearch;
