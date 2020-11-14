import React from 'react';
import { connect } from 'react-redux';
import { addMessage} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

class DialogsContainer extends React.Component {

    onAddMessage(text){
        this.addMessage(text);
    }

    render() {
        return (
            <Dialogs {...this.props} onAddMessage={this.onAddMessage}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        newMessageText: state.dialogPage.newMessageText
    };
}



export default compose(connect(mapStateToProps, {addMessage}), withAuthRedirect)(DialogsContainer);

