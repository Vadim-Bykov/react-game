import style from './Switch.module.scss';
import cn from "classnames";
import PropTypes from "prop-types";

const Switch = ({toggle, checked}) => {
   
   return (
      <label className={style.switch}>
         <input type="checkbox" onClick={toggle} checked={checked} onChange={() => { }} />
         <span className={cn(style.slider, style.round)} />
      </label>
   );
}

Switch.propTypes = {
   toggle: PropTypes.func.isRequired,
   checked: PropTypes.bool,
}

Switch.defaultProps = {
   checked: false,
}

export default Switch;
