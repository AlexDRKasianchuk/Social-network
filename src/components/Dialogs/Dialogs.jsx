import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import MessageReduxForm from './MessageForm'

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

export default Dialogs;

