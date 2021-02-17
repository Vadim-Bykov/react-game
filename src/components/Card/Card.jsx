import './Card.css';
import PropTypes from "prop-types";

const Card = ({id, width, height, back, front, flipped, handleClick}) => {
   return (
      <div
         className={`flip-container ${flipped ? 'flipped' : ''}`}
         style={{ width, height }}
         onClick={()=>handleClick(id)}
      >
         <div className='flipper'>
            <img
               style={{ width, height }}
               className={flipped ? 'front' : 'back'}
               src={flipped ? front : back}
               alt="image" />
         </div>
      </div>
   )
}

Card.propTypes = {
   id: PropTypes.number.isRequired,
   width: PropTypes.number.isRequired,
   height: PropTypes.number.isRequired,
   back: PropTypes.string.isRequired,
   front: PropTypes.string.isRequired,
   flipped: PropTypes.bool.isRequired,
   return: PropTypes.func.isRequired,

}

export default Card;