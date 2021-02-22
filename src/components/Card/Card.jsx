import './Card.scss';
import PropTypes from "prop-types";
import back from '../../img/js-badge.svg';
import soundSuccess from '../../assets/sound/success.mp3';
import soundError from '../../assets/sound/error.mp3';
import { createRef } from 'react';

const Card = ({ id, type, width, height, flipped, handleClick, disabled, solved }) => {
   const refSoundSuccess = createRef();
   const refSoundError = createRef();

   return (
      <div
         className={`flip-container ${flipped ? 'flipped' : ''}`}
         style={{ width, height }}
         onClick={() => disabled ? null : handleClick(id, refSoundSuccess, refSoundError)}
      >
         <div className='flipper'>
            <img
               style={{ width, height }}
               className={flipped ? 'front' : 'back'}
               src={flipped || solved ? type : back}
               alt="card" />
         </div>
         <audio ref={refSoundSuccess} src={soundSuccess} />
         <audio ref={refSoundError} src={soundError} />
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