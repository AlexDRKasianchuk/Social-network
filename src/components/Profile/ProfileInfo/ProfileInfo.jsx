import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import userPhoto from '../../../assets/images/avatar.png';

const ProfileInfo = (props) => {
if(!props.profile){
  return <Preloader />
}
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large||userPhoto} className={s.avatar} alt="avatar"/>
        <ProfileStatus {...props} status={props.status} updateUserStatus={props.updateUserStatus} myId={props.myId}/>
          <div>{props.profile.fullName}</div>
      </div>
    </div>
  );
}
export default ProfileInfo; 