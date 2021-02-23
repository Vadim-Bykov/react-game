import style from './Sound.module.scss';
import PropTypes from "prop-types";
// import useSound from 'use-sound';
import React, { useEffect, useState } from 'react';
import Switch from '../Switch/Switch';
import { connect } from 'react-redux';
import { setOpacity, toggleBG } from '../../redux/burgerReducer';

const CardBackground = ({toggleBG, setOpacity}) => {

   const [value, setValue] = useState(50);

   useEffect(() => {
      setOpacity(value / 100);
   }, [value]);

   const onchangeVolume = (e) => {
      const volume = +e.target.value;
      setValue(volume);
   }

   return (
      <div className={style.soundBlock}>

         <span>Background</span>

         <input onChange={onchangeVolume} id="range" min="0" max="100" value={value} type="range" />

         <Switch toggle={toggleBG} />
         
      </div>
   );
}

Sound.propTypes = {
   setOpacity: PropTypes.func.isRequired,
   toggleBG: PropTypes.func.isRequired,
}

// const mapStateToProps = (state) => ({
//    isSoundActive: state.burger.isSoundActive,
// });

const mapDispatchToProps = {
   setOpacity,
   toggleBG,
}

export default connect(null, mapDispatchToProps)(CardBackground);
