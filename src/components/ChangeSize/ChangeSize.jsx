import { connect } from 'react-redux';
import { finishGame } from '../../store/mainReducer';
import style from './ChangeSize.module.scss';
import PropTypes from "prop-types";
import { getCountPairs } from '../../selectors/mainSelectors';
import cn from "classnames";
import { useHotkeys } from "react-hotkeys-hook";
import { useRef } from 'react';

const ChangeSize = ({ finishGame, countPairs }) => {
   const newGameRef = useRef(null);
   useHotkeys('n+g', () => newGameRef.current.click());

   const onChangeSelect = (e) => {
      finishGame(+e.target.value);
   };
   
   return (
      <div className={style.changeSizeBlock}>
         <div>
            <span>Change board size </span>
            <select className={cn("form-select", "form-select-lg", "mb-3")}  name="ch" id="size" value={countPairs} onChange={onChangeSelect} >
               {/* <option>1</option> */}
               <option>2</option>
               <option>3</option>
               <option>4</option>
               <option>5</option>
               <option>6</option>
               <option>7</option>
            </select>
         </div>
         <div className={style.newGame}>
            <span>You can start new game</span>
            <button  ref={newGameRef} className='btn btn-secondary' onClick={() => finishGame(countPairs)}>New game</button>
         </div>
      </div>
   );
};

ChangeSize.propTypes = {
   finishGame: PropTypes.func.isRequired,
   countPairs: PropTypes.number.isRequired,
   // resetState: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
   countPairs: getCountPairs(state),
})

export default connect(mapStateToProps, { finishGame })(ChangeSize);