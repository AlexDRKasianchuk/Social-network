import { usersAPI} from '../API/api';
const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING',
    TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 99,
    totalUsersCount: 0,
    currentPage:1,
    isFetching: false,
    isSubscribe: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
       case FOLLOW:
           return {
               ...state,
               users: state.users.map(u => {
                if(u.id === action.userId){
                    return {...u, followed: true}
                }   
                return u;
               })
            }
        case UNFOLLOW: 
        return {
            ...state,
            users: state.users.map(u => {
             if(u.id === action.userId){
                 return {...u, followed: false}
             }   
             return u;
            })
            }
        case SET_USERS:
            return{
                ...state , 
                users:  action.users
            }
        case SET_CURRENT_PAGE:
            return{
                ...state, currentPage:action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:{
                return{
                    ...state,
                    totalUsersCount:action.count
                }
            }
        case TOOGLE_IS_FETCHING:{
                return{
                    ...state,
                    isFetching:action.isFetching
                }
            }
        case TOOGLE_IS_FOLLOWING_PROGRESS:{
                return{
                    ...state,
                    followingInProgress:action.followingInProgress
                    ?[...state.followingInProgress,action.userId]
                    :state.followingInProgress.filter(id => id !== action.userId)
                }
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({
    type: FOLLOW,
    userId
})
export const unfollowSuccess= (userId) => ({
    type: UNFOLLOW,
    userId
})
export const setUsers = (users) => ({
    type: SET_USERS,
    users
})
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})
export const setTotalUsersCount = (totalUsersCount) =>({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
})
export const toggleIsFetching = (isFetching) =>({
    type: TOOGLE_IS_FETCHING,
    isFetching
})
export const toggleIsFollowingProgress = (followingInProgress,userId)=>({
    type: TOOGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress,
    userId
})

export const requestUsers = (currentPage,pageSize) => (dispatch) => {
   dispatch(toggleIsFetching(true));

    usersAPI.getUsers(currentPage,pageSize).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(setCurrentPage(currentPage));
    });
}
export const follow = (id) => (dispatch) => {

    dispatch(toggleIsFollowingProgress(true,id));
   usersAPI.follow(id).then(data => {
        if(data.resultCode===0){
            dispatch(followSuccess(id)) 
        }
    });
    dispatch(toggleIsFollowingProgress(false,id));

}
export const unfollow = (id) => (dispatch) => {


   dispatch(toggleIsFollowingProgress(true,id));

    usersAPI.unfollow(id).then(data => {
        if(data.resultCode===0){
            dispatch(unfollowSuccess(id)) 
        }
    });

    dispatch(toggleIsFollowingProgress(false,id));


}

export default usersReducer;


//pull commit test3