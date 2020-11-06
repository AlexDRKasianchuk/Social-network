import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


let store = {
    _state: {
        profilePage: {
            posts: [{
                    id: 1,
                    message: 'Hi, how are you?',
                    likeCount: '1000'
                },
                {
                    id: 2,
                    message: "It's mu first post!",
                    likeCount: '1400'
                }
            ],
            newPostText: 'it'
        },
        dialogPage: {}
    },
    _callSubscriber() {
        console.log("state changed");
    },
    
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;
