import React from 'react';
import s from './Users.module.css';
import userPhoto from './../../assets/images/Geralt_final.jpg';
import { NavLink } from 'react-router-dom';
import { followAPI } from '../../API/api';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
return (
    <div>
        <div>
            {pages.map(p => {
                return <span 
               onClick={()=>{props.onPageChanged(p)}} className={props.currentPage === p && s.selectedPage}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id} >
                        <img className={s.size} src={u.photos.small != null ? u.photos.small : userPhoto} alt="photo_acatar"/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true,u.id);
                                followAPI.unfollow(u.id).then(data => {
                                    if(data.resultCode===0){
                                        props.unfollow(u.id) 
                                    }
                                });
                                props.toggleIsFollowingProgress(false);
                            
                            }}>Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true,u.id);
                                followAPI.follow(u.id).then(data => {
                                    if(data.resultCode===0){
                                        props.follow(u.id) 
                                    }
                                });
                                props.toggleIsFollowingProgress(false);
                                }}> Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>
            )
        }
    </div>
);
}

export default Users