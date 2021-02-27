import style from './Menu.module.scss';
import cn from "classnames";
import { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import ChangeSize from '../ChangeSize/ChangeSize';
import Music from '../Music/Music';
import Sound from '../Sound/Sound';
import CardBackground from '../CardBackground/CardBackground';
import { NavLink } from 'react-router-dom';
import Autoplay from '../Autoplay/Autoplay';

const Menu = (props) => {

   const { isActive, toggleIsMenuActive, isMusicActive, toggleIsMusic, ...restProps } = props;

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
            onClick={toggleIsMenuActive} />
         
         <div className={cn(style.baseMenu, toggleClass)}>
            <div className={style.headerBlock}>
               <h3 className={style.headerCaption}>Menu</h3>
            </div>

            <nav className={style.nav}>
               <NavLink activeClassName={style.active} to='/home'>Home page</NavLink>
               <NavLink activeClassName={style.active} to='/statistic'>Statistic page</NavLink>
            </nav>

            <div className={style.menuContent}>
              
               <ChangeSize />
               <Music isMusicActive={isMusicActive} toggleIsMusic={toggleIsMusic} />
               <Sound {...restProps} />
               <CardBackground />
               <Autoplay />
            </div>
         </div>
      </>
   );
}

Menu.propTypes = {
   isActive: PropTypes.bool.isRequired,
   isMusicActive: PropTypes.bool.isRequired,
   toggleIsMenuActive: PropTypes.func.isRequired,
   toggleIsMusic: PropTypes.func.isRequired,
}

export default Menu;