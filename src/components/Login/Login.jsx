import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginReduxForm from './LoginForm';

const Login = (props) => {

   let onSubmit = (dataForm) =>{
      props.login(dataForm.email,dataForm.password,dataForm.rememberMe);

   }
   if(props.isAuth){
       return <Redirect to={'/profile'} />
   }
    return <>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </>

}
export default Login;