import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';

const ProfileInfo = ({profile}) => {
if(!profile){
  return <Preloader />
}
  return (
    <div>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLaIbprhBGJTkwznDouudeG7Vdz0luBPjH-Q&usqp=CAU' alt='imagesss' />
      </div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} alt="avatar"/>
      </div>
    </div>
  );
}
export default ProfileInfo; 