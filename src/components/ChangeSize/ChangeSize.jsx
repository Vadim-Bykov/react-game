import { connect } from 'react-redux';
import { resetState, setNewCountPairs } from '../../redux/mainReducer';
import style from './ChangeSize.module.scss';
import PropTypes from "prop-types";
import { getCountPairs } from '../../selectors/mainSelectors';

const ChangeSize = ({setNewCountPairs, resetState, countPairs}) => {

   const onChangeSelect = (e) => {
      setNewCountPairs(+e.target.value);
   };
   
   return (
      <div className={style.changeSizeBlock}>
         <div>
            <span>Change board size </span>
            <select name="ch" id="size" value={countPairs} onChange={onChangeSelect} >
               <option>1</option>
               <option>2</option>
               <option>3</option>
               <option>4</option>
               <option>5</option>
               <option>6</option>
               <option>7</option>
            </select>
         </div>
         <div>
            <span>You can start new game</span>
            <button onClick={() => resetState(countPairs)}>New game</button>
         </div>
      </div>
   );
};

ChangeSize.propTypes = {
   setNewCountPairs: PropTypes.func.isRequired,
   resetState: PropTypes.func.isRequired,
   countPairs: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => ({
   countPairs: getCountPairs(state),
})

export default connect(mapStateToProps, { setNewCountPairs, resetState })(ChangeSize);