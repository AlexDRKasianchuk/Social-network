import {setUserData} from '../../redux/authReducer'
import React from 'react';
import Header from './Header';
import { authAPI } from '../../API/api';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {

  componentDidMount() {
    authAPI.auth().then(data => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        this.props.setUserData(id, email, login)
      }
    });

  }

  render() {
    return <Header {...this.props} />
  }
}

let mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{setUserData})(HeaderContainer);
