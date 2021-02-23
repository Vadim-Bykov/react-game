import style from './Switch.module.scss';
import cn from "classnames";
import PropTypes from "prop-types";

const Switch = ({toggle}) => {
   
   return (
      <label className={style.switch}>
         <input type="checkbox" onClick={toggle} />
         <span className={cn(style.slider, style.round)} />
      </label>
   );
}

Switch.propTypes = {
   toggle: PropTypes.func.isRequired,
}

export default Switch;
