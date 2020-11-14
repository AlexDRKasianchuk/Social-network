import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {
    let onSubmit = (dataForm) => {
        props.onAddMessage(dataForm.message);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)}
            </div>

            <div className={s.messages}>
                {props.messages.map(m => <Message message={m.message} />)}
            </div>
            <MessageReduxForm onSubmit={onSubmit} newMessageText={props.newMessageText} />
        </div>
    );
}
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
const MessageReduxForm = reduxForm({ form: 'message' })(MessageForm);

export default Dialogs;

