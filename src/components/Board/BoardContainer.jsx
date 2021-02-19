import './Board.css';
import React, { useEffect } from 'react';
// import Board from './Board';
import { handleClick, resizeBoard, showAllCards, succeedGame } from '../../redux/mainReducer';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import PropTypes from "prop-types";
import { getCards, getDimension, getDisabled, getFlipped, getSolved } from './boardSelector';


const BoardContainer = ({ resizeBoard, handleClick, showAllCards, succeedGame, cards, flipped, dimension, disabled, solved }) => {

  useEffect(() => {
    resizeBoard();
    showAllCards();
  }, []);

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeBoard);

    return () => window.removeEventListener('resize', resizeListener);
  });

  useEffect(() => {
    if (solved.length === cards.length) setTimeout(() => succeedGame(cards.length / 2), 3000);
  }, [solved]);


  return (
    <div className='board'>
       {cards.map((card) => (
          <Card
             key={card.id}
             id={card.id}
             type={card.type}
             width={dimension / 4.5}
             height={dimension / 4.5}
             flipped={flipped.includes(card.id)}
             handleClick={handleClick}
             disabled={disabled || solved.includes(card.id)}
             solved={solved.includes(card.id)}
          />
       ))}
    </div>
 );

};

BoardContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleClick: PropTypes.func.isRequired,
  dimension: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
  solved: PropTypes.arrayOf(PropTypes.number),
}

const mapStateToProps = (state) => ({
  cards: getCards(state),
  flipped: getFlipped(state),
  dimension: getDimension(state),
  disabled: getDisabled(state),
  solved: getSolved(state),
});

const mapDispatchToProps = {
  resizeBoard,
  handleClick,
  showAllCards,
  succeedGame
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