import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {getUserStatus, updateUserStatus, userProfile} from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';
class ProfileContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.match.params.userId;
      if(!userId){
         userId = this.props.myId;
      }
      
      this.props.getUserStatus(userId);
      this.props.userProfile(userId);
   }
   

   render() {
      return (
         <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus} myId={this.props.myId}/>
      )
   }
}

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   myId: state.auth.userId,
   status: state.profilePage.status
})

export default compose(connect(mapStateToProps, {userProfile,updateUserStatus,getUserStatus}),withRouter,withAuthRedirect)(ProfileContainer)
