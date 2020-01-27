import React from 'react';
import './App.css';
import {Layout} from './components/Layout';
import { Provider } from 'react-redux';
import { store } from './store/reduxstore';

function App() {
  return (
    <Provider store={store}>
      <Layout></Layout>
    </Provider>
  );
}

export default App;
