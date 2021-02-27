import { useHotkeys } from "react-hotkeys-hook";
import { connect } from 'react-redux';
import { getIsActive, getIsMusicActive, getIsSoundActive } from '../../selectors/burgerSelectors';
import { setSoundVolume, toggleIsMenuActive, toggleIsMusic, toggleIsSound } from '../../store/burgerReducer';
import PropTypes from "prop-types";
import Header from './Header';
import Menu from '../Menu/Menu';

const HeaderContainer = (props) => {
   
   const { isActive, toggleIsMenuActive } = props;

  useHotkeys('ctrl+m', toggleIsMenuActive);
  useHotkeys('esc', toggleIsMenuActive);

   return (
      <>
         <Header isActive={isActive} toggleIsMenuActive={toggleIsMenuActive} />
         <Menu {...props} />
      </>
   );
}

HeaderContainer.propTypes = {
   isActive: PropTypes.bool.isRequired,
   toggleIsMenuActive: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
   isActive: getIsActive(state),
   isMusicActive: getIsMusicActive(state),
   isSoundActive: getIsSoundActive(state),
});

const mapDispatchToProps = {
   toggleIsMenuActive,
   toggleIsMusic,
   setSoundVolume,
   toggleIsSound,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);