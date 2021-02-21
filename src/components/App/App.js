import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import store from '../../redux/store';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import HeaderContainer from '../Header/HeaderContainer';
// import BoardContainer from '../Board/BoardContainer';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <HeaderContainer />
        <Main />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
