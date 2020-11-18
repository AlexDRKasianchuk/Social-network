import React from 'react';
import { connect } from 'react-redux';
import {setCurrentPage,toggleIsFollowingProgress,follow,unfollow,requestUsers} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import {getUsers,getPageSize,getTotalUsersCount,getCurrentPage,getIsFetching,getFollowingInProgress} from '../../redux/usersSelectors';

class usersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {

        return <>
            {this.props.isFetching ?<Preloader /> : null}
            <Users
                onPageChanged={this.onPageChanged}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                followingInProgress={this.props.followingInProgress}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}

const mapStateToProps = (state) => {

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching:  getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}
// const mapStateToProps = (state) => {

//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }


export default compose(connect(mapStateToProps,{requestUsers,setCurrentPage,toggleIsFollowingProgress,getUsers,follow,unfollow}),withAuthRedirect)(usersContainer);