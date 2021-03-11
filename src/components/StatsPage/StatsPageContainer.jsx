import { connect } from 'react-redux';
import { getFinishedGames } from '../../store/stats/selectors';
import PropTypes from "prop-types";
import StatsPage from './StatsPage';
import style from './StatsPage.module.scss';
import { getIsAuth } from '../../store/auth/selectors';
import { Redirect } from 'react-router-dom';

const StatsPageContainer = ({ finishedGames, isAuth }) => {

   if (!isAuth) return <Redirect to='/login' />;
   
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
   isAuth: getIsAuth(state),
});

export default connect(mapStateToProps)(StatsPageContainer);