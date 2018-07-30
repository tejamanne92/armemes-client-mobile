import { connect } from 'react-redux';
import HomeComponent from './home.component';

const mapStateToProps = state => {
  return {
    home: state.home
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);
