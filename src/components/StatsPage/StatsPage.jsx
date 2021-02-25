import PropTypes from "prop-types";
import style from './StatsPage.module.scss';

const StatsPage = ({ size, time, trueAttempts, falseAttempts, allAttempts }) => {

   return (
      <div className={style.row} >
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