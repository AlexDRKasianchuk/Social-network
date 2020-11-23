import React from 'react';
import User from './User';
import Paginator from '../common/Paginator/Paginator';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
return (
    <div>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} pageSize={props.pageSize} totalUsersCount={props.totalUsersCount}/>
        {
            props.users.map(u => <User user={u} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.unfollow}  key={u.id}/>)
        }
    </div>
);
}

export default Users