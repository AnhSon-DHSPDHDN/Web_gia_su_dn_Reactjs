import React, { Component } from 'react';

const NavIsLogged = React.lazy(() => import('./Navigation/NavIsLogged'));
const Nav = React.lazy(() => import('./Navigation/Nav'));

export default class Navigation extends Component {
	render() {
		let check = localStorage.getItem('token');
		if (check) return <NavIsLogged user={check} />
		return <Nav />
	}
}
