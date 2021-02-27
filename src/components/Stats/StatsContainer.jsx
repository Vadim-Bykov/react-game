import { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateGameTime, statsResetState } from '../../store/stats/statsReducer';
import { getGameTime, getSeconds, getMinutes, getTrueAttempts, getFalseAttempts } from '../../selectors/statsSelectors';
import PropTypes from "prop-types";
import Stats from './Stats';

const StatsContainer = ({ gameTime, minutes, seconds, trueAttempts, falseAttempts, updateGameTime, statsResetState }) => {

   useEffect(() => {
      if (!gameTime && !minutes && !seconds) return;
      const timer = setTimeout(() => updateGameTime(minutes, seconds), 1000);
      if (!gameTime && (minutes || seconds)) {
         statsResetState();
         clearTimeout(timer);
      }

      return () => clearTimeout(timer);
   }, [gameTime, minutes, seconds]);

   const addZero = (n) => {
      return (n < 10 ? '0' + n : n)
    };
   
   return (
      <Stats
         time={`${addZero(minutes)}:${addZero(seconds)}`}
         trueAttempts={trueAttempts}
         falseAttempts={falseAttempts}
      />
   );
}

StatsContainer.propTypes = {
   gameTime: PropTypes.bool.isRequired,
   minutes: PropTypes.number.isRequired,
   seconds: PropTypes.number.isRequired,
   trueAttempts: PropTypes.number.isRequired,
   falseAttempts: PropTypes.number.isRequired,
   updateGameTime: PropTypes.func.isRequired,
   statsResetState: PropTypes.func.isRequired,
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
   statsResetState,
}

export default connect(mapStateToProps, mapDispatchToProps)(StatsContainer);