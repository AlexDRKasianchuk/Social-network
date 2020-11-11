import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';

const Dialogs = ({addMessage, changeMessage,dialogs,messages,newMessageText,isAuth}) => {
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = messages.map(m => <Message message={m.message} />);
    let newMessageElement = React.createRef();

    let onAddMessage = () => {
		addMessage();
	}
	let onMessageChange = () => {
        let text = newMessageElement.current.value;
		changeMessage(text);
	}

    if(!isAuth) return <Redirect to={"/login"} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>

            <div>
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={newMessageText} />
                </div>
                <div>
                    <button onClick={onAddMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;

