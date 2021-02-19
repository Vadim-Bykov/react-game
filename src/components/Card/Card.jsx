import './Card.css';
import PropTypes from "prop-types";
import back from '../../img/js-badge.svg';
// import front from '../../img/react.svg';

const Card = ({id, type, width, height, flipped, handleClick, disabled, solved}) => {
   return (
      <div
         className={`flip-container ${flipped ? 'flipped' : ''}`}
         style={{ width, height }}
         onClick={() => disabled ? null : handleClick(id)}
      >
         <div className='flipper'>
            <img
               style={{ width, height }}
               className={flipped ? 'front' : 'back'}
               src={flipped || solved ? type : back}
               alt="card" />
         </div>
      </div>
   );
}

Card.propTypes = {
   id: PropTypes.number.isRequired,
   width: PropTypes.number.isRequired,
   height: PropTypes.number.isRequired,
   type: PropTypes.string.isRequired,
   flipped: PropTypes.bool.isRequired,
   handleClick: PropTypes.func.isRequired,
   disabled: PropTypes.bool.isRequired,
   solved: PropTypes.bool.isRequired,
}

export default Card;