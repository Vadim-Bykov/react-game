import { connect } from 'react-redux';
import { getIsActive } from '../../selectors/burgerSelectors';
import { toggleIsActive } from '../../redux/burgerReducer';
import PropTypes from "prop-types";
import Header from './Header';
import Menu from '../Menu/Menu';

const HeaderContainer = ({isActive, toggleIsActive}) => {
   return (
      <>
         <Header isActive={isActive} toggleIsActive={toggleIsActive} />
         <Menu isActive={isActive} toggleIsActive={toggleIsActive} />
      </>
   );
}

HeaderContainer.propTypes = {
   isActive: PropTypes.bool.isRequired,
   toggleIsActive: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
   isActive: getIsActive(state),
});

const mapDispatchToProps = {
   toggleIsActive,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);