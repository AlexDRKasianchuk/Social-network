import React from 'react';
import {connect} from 'react-redux';
import { addPost} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

class MyPostsContainer extends React.Component{

	onAddPost(postText){	
		this.addPost(postText);
	}

	render(){
		return(
			<MyPosts {...this.props} onAddPost={this.onAddPost}/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts
	}
}


export default connect(mapStateToProps,{addPost})(MyPostsContainer);