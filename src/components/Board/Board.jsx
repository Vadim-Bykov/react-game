import './Board.scss';
import PropTypes from "prop-types";
import Card from '../Card/Card';

const Board = ({cards, flipped, handleClick, dimension, disabled, solved, refSoundSuccess, refSoundError, cardsBG, opacity}) => {
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
               refSoundSuccess={refSoundSuccess}
               refSoundError={refSoundError}
               cardsBG={cardsBG}
               opacity={opacity}
            />
         ))}
      </div>
   );
}

Board.propTypes = {
   cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
   flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
   handleClick: PropTypes.func.isRequired,
   dimension: PropTypes.number.isRequired,
   disabled: PropTypes.bool.isRequired,
   solved: PropTypes.arrayOf(PropTypes.number),
   refSoundSuccess: PropTypes.object.isRequired,
   refSoundError: PropTypes.object.isRequired,
   cardsBG: PropTypes.string.isRequired,
   opacity: PropTypes.number.isRequired,
}

export default Board;