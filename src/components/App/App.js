import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, withRouter } from 'react-router-dom';
import './App.scss';
import store from '../../store/store';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import HeaderContainer from '../Header/HeaderContainer';
// import StatsPageContainer from '../StatsPage/StatsPageContainer';
import Login from '../Login/Login';
import WithSuspense from '../../hoc/WithSuspense';

const StatsPageContainer = React.lazy(() => import('../StatsPage/StatsPageContainer'));

const MainComponent = () => {
  return (
    <>
      <HeaderContainer />
      {/* <Route exact path='/' render={() => <Redirect to='/home' />} /> */}
      <Route exact path='/' render={Main} />
      <Route path='/statistic' render={WithSuspense(StatsPageContainer)} />
      <Route path='/login' render={() => <Login />} />
      <Footer />
    </>
  );
};

const MainComponentContainer = withRouter(MainComponent);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <MainComponentContainer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
