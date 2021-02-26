import './Card.scss';
import PropTypes from "prop-types";
import back from '../../assets/img/js-badge.svg';
import React, { useRef } from 'react';

const Card = ({ id, type, width, height, flipped, handleClick, disabled, solved, refSoundSuccess, refSoundError, cardsBG, opacity }) => {

   const background = `rgba(${cardsBG}, ${opacity})`;

   const cardRef = React.createRef();

   const getFocus = () => {
      console.log(cardRef.current)
      cardRef.current.focus()
   };

   const onClickCard = () => {
      if (disabled) {
         return null
      } else {
         handleClick(id, refSoundSuccess, refSoundError);
         cardRef.current.focus()
      }
   }

   return (
      <div
         ref={cardRef}
         className={`flip-container ${flipped ? 'flipped' : ''}`}
         style={{ width, height, background }}
         // onClick={() => disabled ? null : handleClick(id, refSoundSuccess, refSoundError)}
         onClick={onClickCard}
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
   refSoundSuccess: PropTypes.object.isRequired,
   refSoundError: PropTypes.object.isRequired,
   cardsBG: PropTypes.string.isRequired,
   opacity: PropTypes.number.isRequired,
}

export default Card;