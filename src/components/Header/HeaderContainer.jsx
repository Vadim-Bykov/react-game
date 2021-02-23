import { connect } from 'react-redux';
import { getIsActive } from '../../selectors/burgerSelectors';
import { toggleIsMenuActive } from '../../redux/burgerReducer';
import PropTypes from "prop-types";
import Header from './Header';
import Menu from '../Menu/Menu';

const HeaderContainer = ({isActive, toggleIsMenuActive}) => {
   return (
      <>
         <Header isActive={isActive} toggleIsMenuActive={toggleIsMenuActive} />
         <Menu isActive={isActive} toggleIsMenuActive={toggleIsMenuActive} />
      </>
   );
}

HeaderContainer.propTypes = {
   isActive: PropTypes.bool.isRequired,
   toggleIsMenuActive: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
   isActive: getIsActive(state),
});

const mapDispatchToProps = {
   toggleIsMenuActive,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);