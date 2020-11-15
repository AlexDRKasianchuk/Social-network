import React from 'react';
import { Field, reduxForm } from 'redux-form';

const MessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"message"} component={'textarea'} value={props.newMessageText} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const  MessageReduxForm = reduxForm({ form: 'message' })(MessageForm);
export default MessageReduxForm;
