import style from './CardBackground.module.scss';
import PropTypes from "prop-types";
// import useSound from 'use-sound';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setCardsBG, setOpacityBG } from '../../redux/burgerReducer';
import { getOpacityBG } from '../../selectors/burgerSelectors';
import cn from "classnames";

const CardBackground = ({ setCardsBG, setOpacityBG, opacity }) => {

   const [value, setValue] = useState(opacity * 100);
   
   useEffect(() => {
      setOpacityBG(value / 100);
   }, [value])

   const onChangeOpacity = (e) => {
      const value = +e.target.value;
      setValue(() => value);
   }

   return (
      <div className={style.cardsBgBlock}>
         <div>Choose a background for the cards</div>
         <div className={style.btnBlock}>
            <button className={cn('btn', 'btn-danger')} onClick={() => setCardsBG('220,53,69')} >Red</button>
            <button className={cn('btn', 'btn-primary')} onClick={() => setCardsBG('13,110,253')} >Blue</button>
            <button className={cn('btn', 'btn-success')} onClick={() => setCardsBG('25,135,84')} >Green</button>
            <button className={cn('btn', 'btn-light')} onClick={() => setCardsBG('255,255,255')} >White</button>
         </div>
         <div className={style.opacityBlock}>
            <span>Opacity</span>
            <input type="range" min='0' max='100' onChange={onChangeOpacity} value={value} />
         </div>
      </div>
   );
}

CardBackground.propTypes = {
   opacity: PropTypes.number.isRequired,
   setCardsBG: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
   opacity: getOpacityBG(state),
});

const mapDispatchToProps = {
   setCardsBG,
   setOpacityBG,
}

export default connect(mapStateToProps, mapDispatchToProps)(CardBackground);
