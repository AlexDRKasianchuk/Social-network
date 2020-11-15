import React from 'react';
import { Field, reduxForm } from 'redux-form';

const PostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field name={'postText'} component={'textarea'} />
			</div>
			<div>
				<button>Add post</button>
			</div>
		</form>
	)
}

const PostReduxForm = reduxForm({ form: 'post' })(PostForm);
export default PostReduxForm;