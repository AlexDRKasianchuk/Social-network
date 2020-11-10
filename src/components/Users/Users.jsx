import React from 'react';
import s from './Users.module.css';
import userPhoto from './../../assets/images/Geralt_final.jpg';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
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
                        <img className={s.size} src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{withCredentials: true,headers: {"API-KEY":"b7b49312-5192-49d9-8dcd-b73f5aee8a6f"}}).then(response => {
                                    if(response.data.resultCode===0){
                                        props.unfollow(u.id) 
                                    }
                                });
                               
                            
                            }}>Unfollow</button>

                            : <button onClick={() => {
                                
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{withCredentials: true,headers: {"API-KEY":"b7b49312-5192-49d9-8dcd-b73f5aee8a6f"}}).then(response => {
                                    if(response.data.resultCode===0){
                                        props.follow(u.id) 
                                    }
                                });
                                
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