import style from './Header.module.scss';
import PropTypes from "prop-types";
import cn from "classnames";

const Header = ({isActive, toggleIsMenuActive}) => {
   return (
      <header className={style.header}>
         <h1>Check your memory</h1>
         <div className={cn(style.burger__menu, { [style.active]: isActive })}
            onClick={toggleIsMenuActive}>
            <div className={style.top}></div>
            <div className={style.middle}></div>
            <div className={style.bottom}></div>
         </div>
      </header>
   );
}

Header.propTypes = {
   isActive: PropTypes.bool.isRequired,
   toggleIsMenuActive: PropTypes.func.isRequired,
}


export default Header;