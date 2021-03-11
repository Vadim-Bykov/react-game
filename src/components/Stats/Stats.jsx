import PropTypes from "prop-types";
import style from './Stats.module.scss';

const Stats = ({ time, trueAttempts, falseAttempts }) => {

   return (
      <div className={style.statisticBlock}>
         <div>Game Time: {time}</div>
         <div>True attempts: {trueAttempts} / False attempts: {falseAttempts}</div>
      </div>
   );
}

Stats.propTypes = {
   time: PropTypes.string.isRequired,
   trueAttempts: PropTypes.number.isRequired,
   falseAttempts: PropTypes.number.isRequired,
}



export default Stats;