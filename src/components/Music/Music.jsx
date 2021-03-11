import style from './Music.module.scss';
import PropTypes from "prop-types";
// import cn from "classnames";
// import PropTypes from "prop-types";
// import useSound from 'use-sound';
import React, { useEffect, useState } from 'react';
import Switch from '../Switch/Switch';

const Music = ({isMusicActive, toggleIsMusic}) => {

   const [value, setValue] = useState(50);

   const refAudio = React.createRef();

   useEffect(() => {
      refAudio.current.volume = value / 100;
   }, [value, refAudio])

   const onchangeVol = (e) => {
      const volume = +e.target.value;
      setValue(volume);
   }

   const onPlay = () => {
      toggleIsMusic((play) => !play);
      if (!isMusicActive) {
         refAudio.current.play()
      } else {
         refAudio.current.pause()
      }
   }

   return (
      <div className={style.musicBlock}>
         <audio ref={refAudio} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3" />

         <span>Music</span>

         <input onChange={onchangeVol} id="range" min="0" max="100" value={value} type="range" />

         <Switch toggle={onPlay} checked={isMusicActive} />
         
      </div>
   );
};

Music.propTypes = {
   toggleIsMusic: PropTypes.func.isRequired,
   isMusicActive: PropTypes.bool.isRequired
}

export default Music;
