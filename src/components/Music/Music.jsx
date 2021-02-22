import style from './Music.module.scss';
import cn from "classnames";
import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import ChangeSize from '../ChangeSize/ChangeSize';

const Music = ({ isActive, toggleIsActive }) => {

   const [value, setValue] = useState(50);
   const [volume, setVolume] = useState(50);

   const refAudio = React.createRef();

   useEffect(() => {
      console.log(refAudio.current.volume=value);
      
   }, [value])

   const onchangeVol = (e) => {
      setValue(() => e.target.value);

      // if (this.value == this.min){
      //    refAudio.current.volume = 0;
      //  } else if(this.value == this.max){
      //    refAudio.current.volume = 1;
      //  }
   }

   const onChangeVolume = (e) =>{
      console.log(e.target)
   }

   return (
      <div>
         <audio ref={refAudio} onVolumeChange={onChangeVolume} controls>
            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3" />
            <source src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' type="audio/ogg" />
         </audio>
         <input onChange={onchangeVol} id="range" min="0" max="100" value={value}  type="range"></input>
      </div>
   );
}

// Music.propTypes = {
//    isActive: PropTypes.bool.isRequired,
//    toggleIsActive: PropTypes.func.isRequired,
// }

export default Music;


// import React, { useState, useEffect } from 'react';

// const useMultiAudio = urls => {
//   const [sources] = useState(
//     urls.map(url => {
//       return {
//         url,
//         audio: new Audio(url),
//       }
//     }),
//   )

//   const [players, setPlayers] = useState(
//     urls.map(url => {
//       return {
//         url,
//         playing: false,
//       }
//     }),
//   )

//   const toggle = targetIndex => () => {
//     const newPlayers = [...players]
//     const currentIndex = players.findIndex(p => p.playing === true)
//     if (currentIndex !== -1 && currentIndex !== targetIndex) {
//       newPlayers[currentIndex].playing = false
//       newPlayers[targetIndex].playing = true
//     } else if (currentIndex !== -1) {
//       newPlayers[targetIndex].playing = false
//     } else {
//       newPlayers[targetIndex].playing = true
//     }
//     setPlayers(newPlayers)
//   }

//   useEffect(() => {
//     sources.forEach((source, i) => {
//       players[i].playing ? source.audio.play() : source.audio.pause()
//     })
//   }, [sources, players])

//   useEffect(() => {
//     sources.forEach((source, i) => {
//       source.audio.addEventListener('ended', () => {
//         const newPlayers = [...players]
//         newPlayers[i].playing = false
//         setPlayers(newPlayers)
//       })
//     })
//     return () => {
//       sources.forEach((source, i) => {
//         source.audio.removeEventListener('ended', () => {
//           const newPlayers = [...players]
//           newPlayers[i].playing = false
//           setPlayers(newPlayers)
//         })
//       })
//     }
//   }, [])

//   return [players, toggle]
// }

// const MultiPlayer = ({ urls }) => {
//   const [players, toggle] = useMultiAudio(urls)

//   return (
//     <div>
//       {players.map((player, i) => (
//         <Player key={i} player={player} toggle={toggle(i)} />
//       ))}
//     </div>
//   )
// }

// const Player = ({ player, toggle }) => (
//   <div>
//     <p>Stream URL: {player.url}</p>
//     <button onClick={toggle}>{player.playing ? 'Pause' : 'Play'}</button>
//   </div>
// )


// export default MultiPlayer