import { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateGameTime, setResetState } from '../../redux/statsReducer';
import { getGameTime, getSeconds, getMinutes, getTrueAttempts, getFalseAttempts } from '../../selectors/statsSelectors';
import style from './CurrentStats.module.scss';
// import cn from "classnames";

const CurrentStatistic = ({ gameTime, minutes, seconds, trueAttempts, falseAttempts, updateGameTime, setResetState }) => {

   // useEffect(() => {
   //    if (!gameTime) return;
   //    const timer = setTimeout(updateGameTime, 1000);
   //    return () => clearTimeout(timer);
   // }, [gameTime]);

   useEffect(() => {
      if (!gameTime && !minutes && !seconds) return;
      const timer = setTimeout(()=>updateGameTime( minutes, seconds), 1000);
      if (!gameTime && (minutes || seconds)) {
         setResetState();
         clearTimeout(timer);
      }

      return () => clearTimeout(timer);
   }, [gameTime, minutes, seconds]);

   function addZero(n) {
      return (n < 10 ? '0' + n : n)
    };
   
   return (
      <div className={style.statisticBlock}>
       {/* <div>Game Time: {gameTime} sec.</div> */}
       <div>Game Time: {`${addZero(minutes)}:${addZero(seconds)}`}</div>
       <div>True attempts: {trueAttempts} / False attempts: {falseAttempts}</div>
      </div>
   );
}

const mapStateToProps = (state) => ({
   gameTime: getGameTime(state),
   minutes: getMinutes(state),
   seconds: getSeconds(state),
   trueAttempts: getTrueAttempts(state),
   falseAttempts: getFalseAttempts(state),
});

const mapDispatchToProps = {
   updateGameTime,
   setResetState,
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentStatistic);