import React from 'react';
import s from './Post.module.css';

const Post = ({message, likeCount}) => {
  return (

    <div className={s.item}>
      <img src='https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Avatar_2_logo.jpg/220px-Avatar_2_logo.jpg' alt='avatar' />
              {message}
      <div>
        <span> {likeCount} ❤</span>
      </div>
    </div>
  );
}
export default Post;