import style from './LogInfo.module.scss';
import PropTypes from "prop-types";
// import cn from "classnames";
import { NavLink } from 'react-router-dom';
import { getIsAuth, getUserName } from '../../store/auth/selectors';
import { logout } from '../../store/auth/actions';
import { connect } from 'react-redux';

const LogInfo = ({ isAuth, userName, logout }) => {
   return (
      <div className={style.infoBlock}>
         {isAuth
            ? <div className={style.loginInfo} >
               <span>{userName}</span>
               <button onClick={logout} >logout</button>
            </div>
            : <NavLink to='/login' >Login</NavLink>}
      </div>
   );
}

LogInfo.propTypes = {
   isAuth: PropTypes.bool.isRequired,
   login: PropTypes.string,
}

LogInfo.defaultProps = {
   login: null,
}

const mapStateToProps = (state) => ({
   isAuth: getIsAuth(state),
   userName: getUserName(state),
});

const mapDispatchToProps = {
   logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInfo)
