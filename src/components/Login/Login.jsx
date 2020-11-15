import React from 'react';
import LoginReduxForm from './LoginForm';

const Login = (props) => {
   let onSubmit = (dataForm) =>{
       console.log(dataForm);
   }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>

}
export default Login;