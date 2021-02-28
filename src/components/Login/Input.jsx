import style from './Login.module.scss';
import PropTypes from "prop-types";
import cn from "classnames";

const Input = ({input, label, type, meta: { touched, error }}) => {
   return (
      <div>
         <label>{label}</label>
         <div className={style.inputBlock} >
            <input {...input} placeholder={label} type={type} className={cn('form-control', style.formControl)} />
            {touched &&
               ((error && <span className={style.error} >{error}</span>))}
         </div>
      </div>
   )
};

Input.propTypes = {
   input: PropTypes.object.isRequired,
   label: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   touched: PropTypes.bool,
   error: PropTypes.string,
};

Input.defaultProps = {
   touched: false,
   error: null,
}

export default Input;


