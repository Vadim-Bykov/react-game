import style from './Header.module.scss';
import PropTypes from "prop-types";
import LogInfo from '../LogInfo/LogInfo';
import Burger from '../Burger/Burger';

const Header = ({ isActive, toggleIsMenuActive }) => {
   
   return (
      <header className={style.header}>
         <LogInfo />
         <h1>Check your memory</h1>
         <Burger isActive={isActive} toggleIsMenuActive={toggleIsMenuActive} />
      </header>
   );
}

Header.propTypes = {
   isActive: PropTypes.bool.isRequired,
   toggleIsMenuActive: PropTypes.func.isRequired,
}


export default Header;