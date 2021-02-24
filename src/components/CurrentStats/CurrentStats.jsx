import { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateGameTime } from '../../redux/statsReducer';
import { getGameTime, getTrueAttempts, getFalseAttempts } from '../../selectors/statsSelectors';
import style from './CurrentStats.module.scss';
// import cn from "classnames";

const CurrentStatistic = ({ gameTime, trueAttempts, falseAttempts, updateGameTime }) => {
   useEffect(() => {
      if (!gameTime) return;
      const timer = setTimeout(updateGameTime, 1000);
      return () => clearTimeout(timer);
   }, [gameTime]);
   
   return (
      <div className={style.statisticBlock}>
       <div>Game Time: {gameTime} sec.</div>
       <div>True attempts: {trueAttempts} / False attempts: {falseAttempts}</div>
      </div>
   );
}

const mapStateToProps = (state) => ({
   gameTime: getGameTime(state),
   trueAttempts: getTrueAttempts(state),
   falseAttempts: getFalseAttempts(state),
});

const mapDispatchToProps = {
   updateGameTime,
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentStatistic);