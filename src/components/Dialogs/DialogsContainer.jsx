 import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';

let mapStateToProps = (state) => {
    
 return {
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
    newMessageText :state.dialogPage.newMessageText
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

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);


export default DialogsContainer;

