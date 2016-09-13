import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

// localization
import { strings } from '../helpers/localization';

// Импортим совмещение
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions';

class VideoScreen extends Component {
  static defaultProps = {
    source: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{uri: this.props.source}}
          style={{marginTop: 40, backgroundColor: 'black'}}
          scrollEnabled={false}
        />
        <Text onPress={this.pop.bind(this)} style={styles.h2}>{strings.done}</Text>
      </View>
    );
  }

  pop() {
    this.props.setNavigatorPath('Main');
    this.props.navigator.popToTop();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  h2: {
    color: 'blue',
    fontWeight: '300',
    position: 'absolute',
    top: 20,
    left: 4,
  },
});

export default connect(()=>{return{}}, (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
})(VideoScreen);
