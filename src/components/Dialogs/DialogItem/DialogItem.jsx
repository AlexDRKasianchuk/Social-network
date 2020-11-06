import React from 'react';
import s from'./DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = ({id, name}) =>{

    return(
        <div className={s.dialog}>
        <NavLink to={"/dialogs/" + id} activeClassName={s.active}>
            {name}
        </NavLink>
    </div>
    );
} 

export default DialogItem;