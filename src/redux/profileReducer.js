const ADD_POST = 'ADD_POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    SEEE = 'SEEE';

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
    newPostText: 'it',
    profile: null

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
        case SET_USER_PROFILE: {
            return {
                ...state, 
                profile: action.profile
            }
        }
        case SEEE:{
            return state;
        }
        default:
            return state;
    }
}

export const addPost = () => ({

    type: ADD_POST
})
export const updateNewPostText= (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})
export const seee = () => ({
    type: SEEE
})
export default profileReducer;