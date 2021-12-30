import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Profile from './Components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import PrivateComponent from './Components/PrivateComponent';

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<PrivateComponent />}>
					<Route exact path="/" element={<Profile />} />
					<Route exact path="/private" element={<PrivateCompo />} />
					<Route exact path="/logout" element={<Logout />} />
				</Route>
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/public" element={<PublicComponent />} />
			</Routes>
		</Router>
	);
}

function PublicComponent() {
	return (
		<div>Public components</div>
	);
}

function PrivateCompo() {
	return (
		<div>Private components</div>
	);
}

export default App;
