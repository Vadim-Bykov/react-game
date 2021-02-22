import style from './Music.module.scss';
import cn from "classnames";
// import PropTypes from "prop-types";
// import useSound from 'use-sound';
import React, { useEffect, useState } from 'react';

const Music = () => {

   const [value, setValue] = useState(50);
   const [play, setPlay] = useState(false);

   const refAudio = React.createRef();

   useEffect(() => {
      refAudio.current.volume = value / 100;
   }, [value, refAudio])

   const onchangeVol = (e) => {
      const volume = +e.target.value;
      setValue(volume);
   }

   const onPlay = () => {
      setPlay((play) => !play);
      if (!play) {
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
         
         <label className={style.switchPlay}>
            <input type="checkbox" onClick={onPlay} />
            <span className={cn(style.slider, style.round)} />
         </label>
      </div>
   );
}

// Music.propTypes = {
//    isActive: PropTypes.bool.isRequired,
//    toggleIsActive: PropTypes.func.isRequired,
// }

export default Music;
