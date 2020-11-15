import {autorize,logout} from '../../redux/authReducer'
import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.autorize();
  }

  render() {
    return <Header {...this.props} logout={this.props.logout}/>
  }
}

let mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{autorize,logout})(HeaderContainer);
