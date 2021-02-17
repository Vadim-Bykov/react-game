import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header/>
        <div className='App'>Hello</div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
