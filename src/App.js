import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, BrowserRouter, Redirect} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import {initApp} from './redux/appReducer'
import { connect } from 'react-redux';
import Preloader from './components/common/preloader/Preloader';

class App extends React.Component{

	componentDidMount() {
		this.props.initApp();
	  }

	render(){
		if(!this.props.init) return<Preloader />

		return (	
			<BrowserRouter>
				<div className='app-wrapper'>
				<Redirect to={'/profile'} />
					<HeaderContainer />
					<Nav />
					<div className='app-wrapper-content'>
						<Route path='/profile/:userId?' render={() => <ProfileContainer/>} />
						<Route path='/dialogs' render={() => <DialogsContainer/>} />
						<Route path='/news' render={() => <News />} />
						<Route path='/music' render={() => <Music />} />
						<Route path='/settings' render={() => <Settings />} />
						<Route path='/users' render={()=> <UsersContainer />} />
						<Route path='/login' render={()=> <LoginContainer />} />
					</div>
				</div>
			</BrowserRouter>
		  );
	}
}

let mapStateToProp = (state) =>({
	init: state.app.init
})

export default connect(mapStateToProp,{initApp})(App);
