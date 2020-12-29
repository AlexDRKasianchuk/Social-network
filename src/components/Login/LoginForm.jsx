import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {requiredField } from '../../utils/validators/validators';
import {Input} from '../common/FormsControls/formsControls';
import s from './Login.module.css'
const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
        <label htmlFor="Login">Login</label>
            <Field name={"email"} placeholder={"Login"} component={Input} validate={[requiredField]}/>
        </div>
        <div>
            
        <label htmlFor="Password">Password </label>
            <Field placeholder={"Password"} type={"password"} name={"password"} component={Input} validate={[requiredField]}/>
        </div>
        <div>
            <Field type={"checkbox"} name={"rememberMe"} component={Input} /> remember me
        </div>
        {props.error && <div className={s.formSummaryError}>
            {props.error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default LoginReduxForm;