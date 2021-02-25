import { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateGameTime, statsResetState } from '../../redux/statsReducer';
import { getGameTime, getSeconds, getMinutes, getTrueAttempts, getFalseAttempts, getFinishedGames } from '../../selectors/statsSelectors';
import PropTypes from "prop-types";
import StatsPage from './StatsPage';
import style from './StatsPage.module.scss';

const StatsPageContainer = ({ finishedGames }) => {
   
   const addZero = (n) => {
      return (n < 10 ? '0' + n : n)
   };

   const statistic = finishedGames.map(({ id, size, minutes, seconds, trueAttempts, falseAttempts }, i) => (
      <StatsPage key={id || i}
         size={size}
         time={`${addZero(minutes)}:${addZero(seconds)}`}
         trueAttempts={trueAttempts}
         falseAttempts={falseAttempts}
         allAttempts={trueAttempts + falseAttempts}
      />
   ));
   
   return (
      <div className={style.statsBlock} >
         <div  className={style.header} >
            <span>Field size</span>
            <span>Time</span>
            <span>Right attempts</span>
            <span>Wrong attempts</span>
            <span>All attempts</span>
         </div>
         {statistic}
      </div>
   );
};

StatsPageContainer.propTypes = {
   finishedGames: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = (state) => ({
   finishedGames: getFinishedGames(state),
});

export default connect(mapStateToProps)(StatsPageContainer);