// import './Board.css';
import React, { createRef, useEffect } from 'react';
import { handleClick, resizeBoard, showAllCards, finishGame, setCards } from '../../store/main/mainReducer';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { getCards, getCountPairs, getDimension, getDisabled, getFlipped, getGameInProgress, getSolved } from '../../selectors/mainSelectors';
import initializeDeck from '../../store/utils/deck';
import Board from './Board';
// import Card from '../Card/Card';
import soundSuccess from '../../assets/sound/success.mp3';
import soundError from '../../assets/sound/error.mp3';
import { getCardsBG, getOpacityBG } from '../../selectors/burgerSelectors';
import { saveFinishedGame } from '../../store/stats/statsReducer';
import { getRefs } from '../../store/autoplay/selectors';
import { addRef } from '../../store/autoplay/actions';


const BoardContainer = ({ resizeBoard, handleClick, showAllCards, finishGame, saveFinishedGame, cards, flipped, dimension, disabled, solved, setCards, countPairs, gameInProgress, cardsBG, opacity, refs, addRef }) => {

  const refSoundSuccess = createRef();
  const refSoundError = createRef();

  useEffect(() => {
    const cardsArray = initializeDeck(countPairs);
    if (!cards.length) {
      setCards(cardsArray)
    } else {
      if (gameInProgress) return;
      setCards(cardsArray)
    };
  }, [countPairs]);

  useEffect(() => {
    resizeBoard();
    showAllCards();
  }, [cards]);

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeBoard);

    return () => window.removeEventListener('resize', resizeListener);
  });

  useEffect(() => {
    if (!cards.length) return;
    if (solved.length === cards.length) {
      saveFinishedGame(countPairs);
      setTimeout(() => finishGame(countPairs), 1500);
    }
  }, [solved]);

  return (
    <>
      <Board
        cards={cards}
        dimension={dimension}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
        refSoundSuccess={refSoundSuccess}
        refSoundError={refSoundError}
        cardsBG={cardsBG}
        opacity={opacity}
        refs={refs}
        addRef={addRef}
      />
      <audio ref={refSoundSuccess} src={soundSuccess} />
      <audio ref={refSoundError} src={soundError} />
    </>
  );
};

BoardContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
  dimension: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
  solved: PropTypes.arrayOf(PropTypes.number),
  countPairs: PropTypes.number.isRequired,
  gameInProgress: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  resizeBoard: PropTypes.func.isRequired,
  showAllCards: PropTypes.func.isRequired,
  finishGame: PropTypes.func.isRequired,
  saveFinishedGame: PropTypes.func.isRequired,
  setCards: PropTypes.func.isRequired,
  cardsBG: PropTypes.string.isRequired,
  opacity: PropTypes.number.isRequired,
  refs: PropTypes.array.isRequired,
  addRef: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cards: getCards(state),
  flipped: getFlipped(state),
  dimension: getDimension(state),
  disabled: getDisabled(state),
  solved: getSolved(state),
  countPairs: getCountPairs(state),
  gameInProgress: getGameInProgress(state),
  cardsBG: getCardsBG(state),
  opacity: getOpacityBG(state),
  refs: getRefs(state),
});

const mapDispatchToProps = {
  resizeBoard,
  handleClick,
  showAllCards,
  finishGame,
  setCards,
  saveFinishedGame,
  addRef,
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);


    
  // (
  //     <Board
  //       cards={cards}
  //       flipped={flipped}
  //       dimension={dimension}
  //       handleClick={handleClick}
  //       disabled={disabled}
  //       solved={solved}
  //     />
  // );

//   (
//     <div className='board'>
//        {cards.map((card) => (
//           <Card
//              key={card.id}
//              id={card.id}
//              type={card.type}
//              width={dimension / 4.5}
//              height={dimension / 4.5}
//              flipped={flipped.includes(card.id)}
//              handleClick={handleClick}
//              disabled={disabled || solved.includes(card.id)}
//              solved={solved.includes(card.id)}
//           />
//        ))}
//     </div>
//  );