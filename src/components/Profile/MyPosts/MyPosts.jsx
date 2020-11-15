import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import PostReduxForm from './MyPostsForm';
const MyPosts = (props) => {
	let onSubmit = (dataForm) => {
		props.onAddPost(dataForm.postText);
	}
	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<PostReduxForm onSubmit={onSubmit}/>
				</div>

				<div className={s.posts}>
					{props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} />)}
				</div>
			</div>
		</div>
	);
}



export default MyPosts;