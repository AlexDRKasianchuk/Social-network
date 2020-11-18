import {
    autorize
} from "./authReducer";

const SET_INIT = 'SET_INIT';

let initialState = {
    init: false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INIT: {
            return {
                ...state,
                init: true
            }
        }
        default:
            return state;
    }
}

export const initSuccess = () => ({
    type: SET_INIT
})

export const initApp = () => (dispatch) => {
    let promise = dispatch(autorize());
    //якщо багато промісів 
    // то завернути в масив
    // коли всі виконаються тоді і ініціалізується app
    // Promise.all([promise]).then

    promise.then(() => {
        dispatch(initSuccess());
    })
}

export default appReducer;