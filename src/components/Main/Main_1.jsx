import React, { useEffect, useState } from 'react';
import Board from '../Board/Board_1';
import initializeDeck from '../../deck';

const Main = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [dimension, setDimension] = useState(480);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    resizeBoard();
    setCards(initializeDeck());
  }, []);

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeBoard);

    return () => window.removeEventListener('resize', resizeListener);
  });

  const resizeBoard = () => {
    setDimension(Math.min(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight
    ));
  };

  const handleClick = (id) => {
    setDisabled(true);

    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) return;
      setFlipped([flipped[0], id]);
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id]);
        resetCards();
      } else {
        setTimeout(resetCards, 1000);
      }
    }
  };

  const sameCardClicked = (id) => flipped.includes(id);

  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id);
    const flippedCard = cards.find((card) => flipped[0] === card.id);
    return flippedCard.type === clickedCard.type;
  };

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  // useEffect(() => {
  //   preloadImages();
  // }, [cards]);

  // const preloadImages = () => {
  //   console.log(cards);
  //   cards.map((card) => {
  //     const src = card.type;
  //     new Image().src = src;
  //   });
  // };

  return (
    <>
      <Board
        dimension={dimension}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
      />
    </>
  );
};

export default Main;
