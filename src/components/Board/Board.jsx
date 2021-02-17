import './Board.css';
import PropTypes from "prop-types";
import Card from '../Card/Card';

const Board = ({cards, flipped, handleClick}) => {
   return (
      <div className='board'>
         {cards.map((card) => (
            <Card
               key={card.id}
               id={card.id}
               type={card.type}
               width={card.width}
               height={card.height}
               // back={card.back}
               // front={card.front}
               flipped={flipped.includes(card.id)}
               handleClick={() => handleClick(card.id)}
            />
         ))}
      </div>
   );
}

Board.propTypes = {
   cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
   flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
   handleClick: PropTypes.func.isRequired,
}

export default Board;