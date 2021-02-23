import style from './Sound.module.scss';
import PropTypes from "prop-types";
// import useSound from 'use-sound';
import React, { useEffect, useState } from 'react';
import Switch from '../Switch/Switch';
import { connect } from 'react-redux';
import { setSoundVolume, toggleIsSound } from '../../redux/burgerReducer';

const Sound = ({toggleIsSound, setSoundVolume}) => {

   const [value, setValue] = useState(50);

   useEffect(() => {
      setSoundVolume(value / 100);
   }, [value]);

   const onchangeVolume = (e) => {
      const volume = +e.target.value;
      setValue(volume);
   }

   return (
      <div className={style.soundBlock}>

         <span>Sound</span>

         <input onChange={onchangeVolume} id="range" min="0" max="100" value={value} type="range" />

         <Switch toggle={toggleIsSound} />
         
      </div>
   );
}

Sound.propTypes = {
   setSoundVolume: PropTypes.func.isRequired,
   toggleIsSound: PropTypes.func.isRequired,
}

// const mapStateToProps = (state) => ({
//    isSoundActive: state.burger.isSoundActive,
// });

const mapDispatchToProps = {
   setSoundVolume,
   toggleIsSound,
}

export default connect(null, mapDispatchToProps)(Sound);
