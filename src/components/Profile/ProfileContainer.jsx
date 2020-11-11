import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {userProfile} from '../../redux/profileReducer';
import { Redirect, withRouter } from 'react-router-dom';
class ProfileContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.match.params.userId;
      if(!userId){
         userId = this.props.myId;
      }
      this.props.userProfile(userId);

   }

   render() {
      if(!this.props.isAuth)return <Redirect to={'/login'} />
         
      return (
         
         <Profile {...this.props} profile={this.props.profile} />
      )
   }
}

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   myId: state.auth.userId,
   
   isAuth: state.auth.isAuth
})


let WithURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {userProfile})(WithURLDataContainerComponent);