import React, { useState } from 'react';

import TopHeader from './TopHeader';
import OptionHeader from './OptionHeader';
import MiddleHeader from './MiddleHeader';

const props = {
	routes_u_interno: [
		{
			path: '/',
			text: 'Interno',
		},
		{
			path: '/',
			text: 'Interno',
		},
		{
			path: '/',
			text: 'Interno',
		},
		{
			path: '/',
			text: 'Interno',
		},
	],
	routes_u_contenido: [
		{
			path: '/',
			text: 'Buscador',
		},
		{
			path: '/',
			text: 'Reporter e Informes',
		},
		{
			path: '/',
			text: 'Tablero de Control',
		},
		{
			path: '/',
			text: 'Entorno Educativo',
		},
	],
	routes_u_administrador: [
		{
			path: '/',
			text: 'administrador',
		},
		{
			path: '/',
			text: 'administrador',
		},
		{
			path: '/',
			text: 'administrador',
		},
		{
			path: '/',
			text: 'administrador',
		},
	],
};

const Header = ({ auth, role, handleClick, handleClickLogout }) => {
	return (
		<header className='header'>
			<TopHeader />
			<div className='header__container'>
				<MiddleHeader
					isLogged={auth}
					role={role}
					handleClick={handleClick}
					handleClickLogout={handleClickLogout}
				/>
				{auth && <OptionHeader role={role} {...props} />}
			</div>
		</header>
	);
};

export default Header;
