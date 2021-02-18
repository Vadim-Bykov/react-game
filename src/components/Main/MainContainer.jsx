import React, { useEffect, useState } from 'react';
import Board from '../Board/Board';
import initializeDeck from '../../deck';
import { handleClick, resizeBoard, setCards, setDimension, setDisabled, setFlipped, setSolved } from '../../redux/mainReducer';
import { connect } from 'react-redux';


const MainContainer = ({ setCards, setFlipped, setDimension, setSolved, setDisabled, resizeBoard, handleClick, cards, flipped, dimension, disabled, solved }) => {


  useEffect(() => {
    // resizeBoard();
    // setCards(initializeDeck());
  }, []);

  // useEffect(() => {
  //   const resizeListener = window.addEventListener('resize', resizeBoard);

  //   return () => window.removeEventListener('resize', resizeListener);
  // });

  // const resizeBoard = () => {
  //   setDimension(Math.min(
  //     document.documentElement.clientWidth,
  //     document.documentElement.clientHeight
  //   ));
  // };

  // const handleClick = (id) => {
  //   setDisabled(true);

  //   if (flipped.length === 0) {
  //     setFlipped([id]);
  //     setDisabled(false);
  //   } else {
  //     if (sameCardClicked(id)) return;
  //     setFlipped([flipped[0], id]);
  //     if (isMatch(id)) {
  //       setSolved([...solved, flipped[0], id]);
  //       resetCards();
  //     } else {
  //       setTimeout(resetCards, 1000);
  //     }
  //   }
  // };

  // const sameCardClicked = (id) => flipped.includes(id);

  // const isMatch = (id) => {
  //   const clickedCard = cards.find((card) => card.id === id);
  //   const flippedCard = cards.find((card) => flipped[0] === card.id);
  //   return flippedCard.type === clickedCard.type;
  // };

  // const resetCards = () => {
  //   setFlipped([]);
  //   setDisabled(false);
  // };

 

  return (
    <>
      <Board
        cards={cards}
        flipped={flipped}
        dimension={dimension}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
      />
    </>
  );
};


const mapStateToProps = (state) => ({
  cards: state.main.cards,
  flipped: state.main.flipped,
  dimension: state.main.dimension,
  disabled: state.main.disabled,
  solved: state.main.solved,
});

const mapDispatchToProps = {
  setCards,
  setFlipped,
  setDimension,
  setSolved,
  setDisabled,
  resizeBoard,
  handleClick
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
