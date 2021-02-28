import style from './Login.module.scss';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { setAuthData } from '../../store/auth/actions';
import { getIsAuth } from '../../store/auth/selectors';
import { Redirect } from 'react-router-dom';
import { ReduxLoginForm } from './LoginForm';


const Login = ({ isAuth, setAuthData }) => {
   
   if (isAuth) return <Redirect to='home' />

   const onSubmitForm = (formData) => {
      console.log(formData);
      setAuthData(formData);
   }

   return (
      <div className={style.loginBlock} >
         <h3>Please, fill in the form.</h3>
         <ReduxLoginForm onSubmit={onSubmitForm} />
      </div>
   );
};

Login.propTypes = {
   isAuth: PropTypes.bool.isRequired,
   setAuthData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
   isAuth: getIsAuth(state),
});


export default connect(mapStateToProps, {setAuthData})(Login);