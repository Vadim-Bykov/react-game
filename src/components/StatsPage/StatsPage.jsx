import PropTypes from "prop-types";
import style from './StatsPage.module.scss';

const StatsPage = ({ size, date, time, trueAttempts, falseAttempts, allAttempts }) => {

   return (
      <div className={style.row} >
         <span className={style.date} >{date}</span>
         <span>{size}</span>
         <span>{time}</span>
         <span>{trueAttempts}</span>
         <span>{falseAttempts}</span>
         <span>{allAttempts}</span>
      </div>
   );
};

StatsPage.propTypes = {
   time: PropTypes.string.isRequired,
   trueAttempts: PropTypes.number.isRequired,
   falseAttempts: PropTypes.number.isRequired,
}



export default StatsPage;