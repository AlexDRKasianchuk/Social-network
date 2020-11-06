const ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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

}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
            posts:[...state.posts, {
                id: 3,
                message: state.newPostText,
                likeCount: 0
            }],
            newPostText:''
        };
        }
        case UPDATE_NEW_POST_TEXT: {
           return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updateNewPostTextActionCreator = (text) => ({

    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export default profileReducer;