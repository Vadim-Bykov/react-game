import { connect } from 'react-redux';
import { finishGame } from '../../store/main/mainReducer';
import style from './Autoplay.module.scss';
import PropTypes from "prop-types";
import { getCountPairs } from '../../store/main/selectors';
import { playGame } from '../../store/autoplay/middleware';
import { toggleIsMenuActive } from '../../store/burger/burgerReducer';

const Autoplay = ({ toggleIsMenuActive, finishGame, countPairs, playGame }) => {

   const onAutoplay = () => {
      toggleIsMenuActive();
      finishGame(countPairs);
      setTimeout(playGame, 2000);
   }
   
   return (
      <div className={style.autoPlayBlock}>
         <button className='btn btn-warning' onClick={onAutoplay}>Autoplay</button>
      </div>
   );
};

Autoplay.propTypes = {
   finishGame: PropTypes.func.isRequired,
   countPairs: PropTypes.number.isRequired,
   toggleIsMenuActive: PropTypes.func.isRequired,
   playGame: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
   countPairs: getCountPairs(state),
})

export default connect(mapStateToProps, { finishGame, playGame, toggleIsMenuActive })(Autoplay);