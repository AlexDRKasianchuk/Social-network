import React from 'react';
import Login from './Login';
import {login} from '../../redux/authReducer';
import { connect } from 'react-redux';

class LoginContainer extends React.Component{

   render(){
       return (
       <Login login={this.props.login} isAuth={this.props.isAuth}/>
       )
   }

}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{login})(LoginContainer);