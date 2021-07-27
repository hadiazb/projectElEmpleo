import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { getLogin, getLogout } from '../redux/actions/authAction.js';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = (props) => {
	const handleClick = () => {
		props.getLogin();
	};

	const handleClickLogout = () => {
		props.getLogout();
	};

	return (
		<Fragment>
			<Header
				auth={props.auth}
				role={props.role}
				handleClick={handleClick}
				handleClickLogout={handleClickLogout}
			/>
			{props.children}
			<Footer />
		</Fragment>
	);
};

const mapStateToProps = (reducers) => {
	const { auth } = reducers;
	return auth;
};

const mapDispatchToProps = { getLogin, getLogout };

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
