import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

// localization
import { strings } from '../helpers/localization';

class Search extends Component {

  static propTypes = {
    submitSearch: React.PropTypes.func.isRequired,
    applyFilter: React.PropTypes.func.isRequired,
  };

  static defaultProps = {
    submitSearch: ()=>{},
    applyFilter: ()=>{},
    filterApplied: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      text: "",
      filterApplied: this.props.filterApplied,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({filterApplied: nextProps.filterApplied});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.middle}>
          <TextInput
            style={styles.textInput} onChangeText={(text)=>this.setState({text: text})}
            placeholder={strings.search} returnKeyType="search" onSubmitEditing={this.submit.bind(this)}
          />
        </View>
        <View style={styles.right}>
          <Text onPress={this.submit.bind(this)} style={styles.h2}>{strings.find}</Text>
        </View>
        <View style={styles.left}>
          <TouchableWithoutFeedback onPress={this.applyFilter.bind(this)}>
            <Image style={styles.filterIcon} source={this.getFilterIcon()}/>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }

  getFilterIcon() {
    if (this.state.filterApplied) {
      return require('../assets/filter/filterBlue.png');
    }
    else {
      return require('../assets/filter/filterBlack.png')
    }
  }

  submit() {
    this.props.submitSearch(this.state.text);
  }

  applyFilter() {
    // Стейт не успевает обновлятьсяgit
    let filter = 0;
    if (!this.state.filterApplied) {
      filter = 1;
    }
    this.setState({filterApplied: !this.state.filterApplied});
    this.props.applyFilter(filter);
  }
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    backgroundColor: 'rgba(237, 238, 240, 1)',
    margin: 4,
    marginHorizontal: 8,
    flexDirection: 'row',
  },

  left: {
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },

  middle: {
    flex: 1,
    justifyContent: 'center',
  },

  right: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  h2: {
    color: '#007AFF',
  },

  textInput: {
    height: 24,
    backgroundColor: 'white',
  },

  filterIcon: {
    height: 20,
    width: 20,
  },
});

export default Search;
