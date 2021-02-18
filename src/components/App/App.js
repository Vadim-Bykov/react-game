import React from 'react';
// import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import store from '../../redux/store';
// import Board from '../Board/Board';
// import initializeDeck from '../../deck';
import Main from '../Main/Main';
import MainContainer from '../Main/MainContainer';

function App() {
  // const [cards, setCards] = useState([]);

  // const [flipped, setFlipped] = useState([]);

  // const handleClick = (id) => setFlipped([...flipped, id]);

  // useEffect(() => {
  //   setCards(initializeDeck())
  // },[])

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
