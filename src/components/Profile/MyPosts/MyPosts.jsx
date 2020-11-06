import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({updateNewPostText,addPost,posts,newPostText}) => {
	let postElements = posts.map(p => <Post message={p.message} likeCount={p.likeCount} />);

	let newPostElement = React.createRef();
	let onAddPost = () => {
		addPost();
	}
	let onPostChange = () => {
		let text = newPostElement.current.value;
		updateNewPostText(text);
	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<div>
						<textarea onChange={onPostChange} ref={newPostElement} value={newPostText} />
					</div>
					<div>
						<button onClick={onAddPost}>Add post</button>
					</div>
				</div>
				<div className={s.posts}>
					{postElements}
				</div>
			</div>
		</div>
	);
}
export default MyPosts;