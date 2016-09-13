import React, { Component } from 'react';
import {
  Navigator,
} from 'react-native';

import Main from './containers/Main';

// Импортим компонент для нейтива
import { Provider } from 'react-redux';

// Импортим функцию создания стора
import createStore from './redux/createStore';

// Создаем стор с пустым объектом
const store = createStore({});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{component: Main}}
          renderScene={this.renderScene.bind(this)}
        />
      </Provider>
    );
  }

  renderScene(route, navigator) {
    return (
      <route.component
        {...route.props}
        navigator={navigator}
      />
    );
  }
}

export default App;
