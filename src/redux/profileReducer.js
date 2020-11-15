import {profileAPI} from "../API/api";

const ADD_POST = 'ADD_POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    SET_STATUS = 'SET_STATUS';

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
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {
                    id: 3,
                    message: action.postText,
                    likeCount: 0
                }]
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPost = (postText) => ({
    type: ADD_POST,
    postText
})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})
export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})
//thunk
export const userProfile = (userId) => (dispatch) => {
    profileAPI.profile(userId).then(data => {
        dispatch(setUserProfile(data));
    })
}
export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setStatus(data));
    })
}
export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
        if (data.resultCode === 0){
           
            dispatch(setStatus(status));
        }
    })
}




export default profileReducer;