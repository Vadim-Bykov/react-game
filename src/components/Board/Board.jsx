// import './Board.css';
// import PropTypes from "prop-types";
// import Card from '../Card/Card';

// const Board = ({cards, flipped, handleClick, dimension, disabled, solved}) => {
//    return (
//       <div className='board'>
//          {cards.map((card) => (
//             <Card
//                key={card.id}
//                id={card.id}
//                type={card.type}
//                width={dimension / 4.5}
//                height={dimension / 4.5}
//                flipped={flipped.includes(card.id)}
//                handleClick={handleClick}
//                disabled={disabled || solved.includes(card.id)}
//                solved={solved.includes(card.id)}
//             />
//          ))}
//       </div>
//    );
// }

// Board.propTypes = {
//    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
//    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
//    handleClick: PropTypes.func.isRequired,
//    dimension: PropTypes.number.isRequired,
//    disabled: PropTypes.bool.isRequired,
//    solved: PropTypes.arrayOf(PropTypes.number),
// }

// export default Board;