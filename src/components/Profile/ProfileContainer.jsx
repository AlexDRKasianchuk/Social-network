import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {userProfile} from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
class ProfileContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.match.params.userId;
      if(!userId){
         userId = this.props.myId;
      }
      this.props.userProfile(userId);

   }

   render() {
      return (
         <Profile {...this.props} profile={this.props.profile} />
      )
   }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   myId: state.auth.userId,
})


let WithURLDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {userProfile})(WithURLDataContainerComponent);