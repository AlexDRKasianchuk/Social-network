
import {connect} from 'react-redux';
import { updateNewPostText, addPost} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}


const MyPostsContainer = connect(mapStateToProps,{updateNewPostText,addPost})(MyPosts);

export default MyPostsContainer;