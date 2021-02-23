import style from './Header.module.scss';
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

export default Header;