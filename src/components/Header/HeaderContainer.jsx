import {autorize} from '../../redux/authReducer'
import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.autorize();
  }

  render() {
    return <Header {...this.props} />
  }
}

let mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{autorize})(HeaderContainer);
