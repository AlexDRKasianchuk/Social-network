import React from 'react';
import { Field, reduxForm } from 'redux-form';


const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
        <label htmlFor="Login">Login</label>
            <Field name={"login"} placeholder={"Login"} component={'input'} />
        </div>
        <div>
            
        <label htmlFor="Password">Password </label>
            <Field placeholder={"Password"} name={"password"} component={'input'} />
        </div>
        <div>
            <Field type={"checkbox"} name={"rememberMe"} component={'input'} /> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

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