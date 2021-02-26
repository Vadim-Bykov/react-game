import { connect } from 'react-redux';
import { getFinishedGames } from '../../selectors/statsSelectors';
import PropTypes from "prop-types";
import StatsPage from './StatsPage';
import style from './StatsPage.module.scss';

const StatsPageContainer = ({ finishedGames }) => {
   
   const addZero = (n) => {
      return (n < 10 ? '0' + n : n)
   };

   const statistic = finishedGames.map(({ id, date, size, minutes, seconds, trueAttempts, falseAttempts }, i) => (
      <StatsPage key={id || i}
         date={date}
         size={size}
         time={`${addZero(minutes)}:${addZero(seconds)}`}
         trueAttempts={trueAttempts}
         falseAttempts={falseAttempts}
         allAttempts={trueAttempts + falseAttempts}
      />
   ));
   
   return (
      <div>
         <h2 className={style.title}>Game statistic</h2>
         <div className={style.statsBlock} >
            <div className={style.header} >
               <span>Date</span>
               <span>Field size</span>
               <span>Time</span>
               <span>Right attempts</span>
               <span>Wrong attempts</span>
               <span>All attempts</span>
            </div>
            {statistic}
         </div>
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