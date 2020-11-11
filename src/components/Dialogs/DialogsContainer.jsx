
import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    
 return {
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
    newMessageText :state.dialogPage.newMessageText,
    isAuth: state.auth.isAuth
 };
}

let mapDispatchToProps = (dispatch) => {
 return {
    changeMessage: (text)=>{
        dispatch(updateNewMessageTextActionCreator(text))
    },
    addMessage: () =>{
        dispatch(addMessageActionCreator());
    }
 };
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);


export default DialogsContainer;

