import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ProfileStatus = (props) => {

        let [editMode,setEditMode] = useState(false);
        let [status,setStatus] = useState(props.status);

        useEffect(()=>{
            setStatus(props.status);
        },[props.status]);
        
        const activateEditMode = () =>{
            setEditMode(true);
        }
        const deactivateEditMode = () =>{
            setEditMode(false);
            props.updateUserStatus(status);
        }
        const onStatusChange = (e) =>{
            setStatus(e.currentTarget.value);
        }
    return (
        <>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "-------"}</span>
                </div>
             }
             {editMode &&
                <div>
                    <input autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode} value={status}/>
                </div>}
        </>
    )
}

export default ProfileStatus;