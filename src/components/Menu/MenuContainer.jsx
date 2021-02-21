// import { connect } from 'react-redux';
// import PropTypes from "prop-types";
// import { getIsActive } from '../../selectors/burgerSelectors';
// import { toggleIsActive } from '../../redux/burgerReducer';
// import Menu from './Menu';

// const MenuContainer = ({isActive, toggleIsActive}) => {
//    return (
//       <>
//          <Menu isActive={isActive} toggleIsActive={toggleIsActive} />
//       </>
//    );
// }

// MenuContainer.propTypes = {
//    isActive: PropTypes.bool.isRequired,
//    toggleIsActive: PropTypes.func.isRequired,
// }

// const mapStateToProps = (state) => ({
//    isActive: getIsActive(state),
// });

// const mapDispatchToProps = {
//    toggleIsActive,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);