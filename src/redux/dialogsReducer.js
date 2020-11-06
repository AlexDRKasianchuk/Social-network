const ADD_MESSAGE = 'ADD-MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {

    dialogs: [{
            id: 1,
            name: 'Andrew'
        },
        {
            id: 2,
            name: 'Alex'
        },
        {
            id: 3,
            name: 'Sveta'
        },
        {
            id: 4,
            name: 'Zahar'
        },
        {
            id: 5,
            name: 'Max'
        },
        {
            id: 6,
            name: 'Oleh'
        }
    ],
    messages: [{
            id: 1,
            message: 'Hi'
        },
        {
            id: 2,
            message: 'Hello'
        },
        {
            id: 3,
            message: 'Hello'
        }
    ],
    newMessageText: ''

}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
           return {
                ...state,
              
                messages: [...state.messages,{ 
                    id: 4,
                    message: state.newMessageText
                }],
                newMessageText: " "
            }; 

        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            };
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
})
export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})

export default dialogsReducer;