import { connect } from 'react-redux';
import { setNewCountPairs } from '../../redux/mainReducer';
import style from './ChangeSize.module.css';
import PropTypes from "prop-types";
import { getCountPairs } from '../../selectors/boardSelector';

const ChangeSize = ({setNewCountPairs, countPairs}) => {

   const onChangeSelect = (e) => {
      setNewCountPairs(+e.target.value);
   };
   
   return (
      <div className={style.changeSizeBlock}>
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
   );
};

ChangeSize.propTypes = {
   setNewCountPairs: PropTypes.func.isRequired,
   countPairs: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => ({
   countPairs: getCountPairs(state),
})

export default connect(mapStateToProps, { setNewCountPairs })(ChangeSize);