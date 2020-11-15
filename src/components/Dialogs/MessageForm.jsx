import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../utils/validators/validators';
import { TextArea } from '../common/FormsControls/formsControls';

const maxLength100 = maxLengthCreator(100);

const MessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"message"} component={TextArea} validate={[requiredField,maxLength100]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const  MessageReduxForm = reduxForm({ form: 'message' })(MessageForm);
export default MessageReduxForm;
