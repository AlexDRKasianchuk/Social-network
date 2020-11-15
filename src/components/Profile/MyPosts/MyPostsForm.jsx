import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../../utils/validators/validators';
import { TextArea } from '../../common/FormsControls/formsControls';

const maxLength10 = maxLengthCreator(10)
const PostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field name={'postText'} component={TextArea} validate={[requiredField,maxLength10]}/>
			</div>
			<div>
				<button>Add post</button>
			</div>
		</form>
	)
}

const PostReduxForm = reduxForm({ form: 'post' })(PostForm);
export default PostReduxForm;