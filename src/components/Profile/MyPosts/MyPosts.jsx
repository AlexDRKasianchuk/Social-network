import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	let onSubmit = (dataForm) => {
		props.onAddPost(dataForm.postText);
	}
	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<PostReduxForm onSubmit={onSubmit} newPostText={props.newPostText} />
				</div>

				<div className={s.posts}>
					{props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} />)}
				</div>
			</div>
		</div>
	);
}

const PostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field name={'postText'} placeholder={props.newPostText} component={'textarea'} />
			</div>
			<div>
				<button>Add post</button>
			</div>
		</form>
	)
}

const PostReduxForm = reduxForm({ form: 'post' })(PostForm);

export default MyPosts;