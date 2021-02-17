import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import store from '../../redux/store';
import Card from '../Card/Card';
import back from '../../img/js-badge.svg';
import front from '../../img/react.svg';
import Board from '../Board/Board';
import initializeDeck from '../../deck';

function App() {
  const [cards, setCards] = useState([]);

  const [flipped, setFlipped] = useState([]);

  const handleClick = (id) => setFlipped([...flipped, id]);

  useEffect(() => {
    setCards(initializeDeck())
  },[])

  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Board
          cards={cards}
          flipped={flipped}
          handleClick={handleClick}
        />
        
        {/* <Card
          id={1}
          width={100}
          height={100}
          back={back}
          front={front}
          flipped={flipped.includes(1)}
          handleClick={()=>handleClick(1)}
        /> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
