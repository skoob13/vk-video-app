import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  AsyncStorage
} from 'react-native';
import Toolbar from '../components/Toolbar';
import VideoRow from '../components/VideoRow';
import Separator from '../components/Separator';
import VideoScreen from './VideoScreen';
import Search from '../components/Search';
import NoVids from '../components/NoVids';
import NoSearch from '../components/NoSearch';
import Spinner from '../components/Spinner';
import Settings from './Settings';
import { convertDateToString } from '../helpers/datehelper';
// Импортим метод коннект для совмещения компонентов и редьюсеров
import { connect } from 'react-redux';

// Импортим метод совмещения пропсов для диспетчера
import { bindActionCreators } from 'redux';

// Импортим все акшенс
import { ActionCreators } from '../redux/actions';

class Main extends Component {
  constructor(props) {
    super(props);

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      isSearching: false,
      searchText: "",
      dataSource: ds.cloneWithRows([]), //fetch first videos
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isSearching: false,
      dataSource: this.state.dataSource.cloneWithRows(nextProps.searchedVideos)
    });
  }

  // Redux methods
  onSearchButtonPressed(searchText) {
    if (!this.state.isSearching && searchText.length > 0) {
      this.setState({searchText: searchText, isSearching: true});
      this.props.fetchVideos(searchText);
    }
  }

  fetchMoreVideos() {
    this.props.fetchVideos(this.state.searchText, this.props.videosCount);
  }

  onApplyFilterButtonPressed(filter) {
    this.props.setSortType(filter);
  }
  //

  render() {
    return (
      <View style={styles.container}>
        <Toolbar
          iconSrc={require('../assets/settings/settings.png')}
          onIconPress={this.pushToSettings.bind(this)}
        />
        <Search
          filterApplied={Boolean(this.props.sort)}
          submitSearch={this.onSearchButtonPressed.bind(this)}
          applyFilter={this.onApplyFilterButtonPressed.bind(this)}
        />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          renderSeparator={this.renderSeparator.bind(this)}
          onEndReached={this.fetchMoreVideos.bind(this)}
          renderHeader={this.renderHeader.bind(this)}
          enableEmptySections={true}
        />
      </View>
    );
  }

  renderRow(row) {
    return (
      <VideoRow
        imageSrc={row.thumb} title={row.title}
        date={convertDateToString(row.date)} duration={row.duration}
        links={{video: row.player}}
        //Here should be redux state
        onPress={this.push.bind(this)}
      />
    );
  }

  renderSeparator(rowData, sectionId) {
    return <Separator key={sectionId}/>;
  }

  renderHeader() {
    if (this.state.searchText.length === 0) {
      return <NoSearch/>
    }
    else if (this.state.isSearching) {
      return <Spinner/>
    }
    else if (this.props.videosCount === 0) {
      return <NoVids/>;
    }
    else {
      return null;
    }
  }

  push(props) {
    this.props.setNavigatorPath('VideoScreen');
    this.props.navigator.push({component: VideoScreen, props: {source: props.links.video}});
  }

  pushToSettings() {
    this.props.setNavigatorPath('Settings');
    this.props.navigator.push({component: Settings});
  }
}

// Достаем нужные нам стейты и передаем их в пропсы
function mapStateToProps(state) {
  console.log(state);
  return {
    searchedVideos: state.searchedVideos,
    videosCount: state.videosCount,
    sort: state.sort,
  };
}

// Паттерн
// Совмещаем экшнс и пропсы, чтобы вызывать необходимые через this.props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(237, 238, 240, 1)',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
