import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.scss';
import store from '../../store/store';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import HeaderContainer from '../Header/HeaderContainer';
import StatsPageContainer from '../StatsPage/StatsPageContainer';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <HeaderContainer />
        {/* <Main /> */}
        {/* <StatsPageContainer /> */}
        <Route exact path='/' render={() => <Redirect to='/home' />} />
        <Route path='/home' render={Main} />
        <Route path='/statistic' render={() => <StatsPageContainer />} />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
