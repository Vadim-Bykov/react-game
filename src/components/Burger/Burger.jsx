import style from '../Header/Header.module.scss';
import PropTypes from "prop-types";
import cn from "classnames";

const Burger = ({ isActive, toggleIsMenuActive }) => {

   const classActive = { [style.active]: isActive };
   
   return (
      <>
         <div className={cn(style.burgerMenu, classActive)}
            onClick={toggleIsMenuActive}>
            <div className={style.top}></div>
            <div className={style.middle}></div>
            <div className={style.bottom}></div>
         </div>
         <div className={cn(style.fake, classActive)} />
      </>
   );
}

Burger.propTypes = {
   isActive: PropTypes.bool.isRequired,
   toggleIsMenuActive: PropTypes.func.isRequired,
}


export default Burger;