import style from './Menu.module.scss';
import cn from "classnames";
import { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import ChangeSize from '../ChangeSize/ChangeSize';

const Menu = ({ isActive, toggleIsActive }) => {
   const [hide, setHide] = useState(false);

   useEffect(() => {
      if (!isActive) {
         setHide(() => true);
         setTimeout(() => setHide(() => false), 150);
      };
   }, [isActive]);
   
   const toggleClass = {
      [style.open]: isActive,
      [style.hide]: hide
   };

   return (
      <>
         <div className={cn(style.overlay, toggleClass)}
            onClick={toggleIsActive} />
         
         <div className={cn(style.baseMenu, toggleClass)}>
            <div className={style.headerBlock}>
               <h3 className={style.headerCaption}>Menu</h3>
            </div>
            <div className={style.menuContent}>

               <ChangeSize />
               
            </div>
         </div>
      </>
   );
}

Menu.propTypes = {
   isActive: PropTypes.bool.isRequired,
   toggleIsActive: PropTypes.func.isRequired,
}

export default Menu;