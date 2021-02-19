import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import store from '../../redux/store';
import Main from '../Main/Main';
// import BoardContainer from '../Board/BoardContainer';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Main />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
