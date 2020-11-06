import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLaIbprhBGJTkwznDouudeG7Vdz0luBPjH-Q&usqp=CAU' alt='imagesss' />
      </div>
      <div className={s.descriptionBlock}>
        ava + des
      </div>
    </div>
  );
}
export default ProfileInfo; 