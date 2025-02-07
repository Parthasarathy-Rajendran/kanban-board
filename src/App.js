import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Board from './components/Board';

const App = () => (
  <Provider store={store}>
    <Board />
  </Provider>
);

export default App;
