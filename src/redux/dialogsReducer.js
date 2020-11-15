const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]

}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
           return {
                ...state,
              
                messages: [...state.messages,{ 
                    id: 4,
                    message: action.messageText
                }]
            }; 

        }
        default:
            return state;
    }
}

export const addMessage = (messageText) => ({
    type: ADD_MESSAGE,
    messageText
})
export default dialogsReducer;