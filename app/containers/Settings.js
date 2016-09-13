import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import Toolbar from '../components/Toolbar';
import SettingsRow from '../components/SettingsRow';

// localization
import { strings } from '../helpers/localization';

// Импортим совмещение
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions';

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar
          iconSrc={require('../assets/back/back.png')}
          onIconPress={this.pop.bind(this)}
          title={strings.settings}
        />
        <ScrollView style={styles.scrollView}>
          <Text style={styles.h2}>{strings.APPLY_SAFE_FILTER}</Text>
          <SettingsRow
            text={strings.safe_search}
            value={!Boolean(this.props.settings.adult)}
            onValueChange={(state) => this.props.setSettings({adult: Number(!state)} )}
          />
          <Text style={styles.h2}>{strings.APPLY_HD_FILTER}</Text>
          <SettingsRow
            text={strings.hd}
            value={Boolean(this.props.settings.hd)}
            onValueChange={(state) => this.props.setSettings({hd: Number(state)} )}
          />
        </ScrollView>
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
    backgroundColor: 'rgba(237, 238, 240, 1)',
  },

  scrollView: {
    flex: 1,
  },

  h2: {
    color: 'rgba(80, 104, 145, 1)',
    fontWeight: '500',
    margin: 8,
  },
});

export default connect((state) => {
  return {
    settings: state.settings
  };
}, (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
})(Settings);
