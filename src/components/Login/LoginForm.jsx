import style from './Login.module.scss';
import PropTypes from "prop-types";
import { Field, reduxForm } from 'redux-form';
import { maxLength, required, minLength, email } from './validators';
import Input from './Input';

const maxLength20 = maxLength(20);
const minLength6 = minLength(6);
const minLength4 = minLength(4);

const LoginForm = ({ handleSubmit }) => {
   return (
      <form onSubmit={handleSubmit} className={style.form} >
                  
         <Field
            name='userName'
            type='text'
            component={Input}
            label='Enter username'
            validate={[required, maxLength20, minLength4]}
         />

         <Field
            name='email'
            type='text'
            component={Input}
            label='Enter your email'
            validate={[required, maxLength20, email]}
         />

         <Field
            name='password'
            type='password'
            component={Input}
            label='Enter your password'
            validate={[required, maxLength20, minLength6]}
         />

         <div>
            <button className='btn btn-secondary' type='submit'>Submit</button>
         </div>
      </form>
   );
};

LoginForm.propTypes = {
   handleSubmit: PropTypes.func.isRequired,
};

export const ReduxLoginForm = reduxForm({ form: 'loginForm' })(LoginForm);

