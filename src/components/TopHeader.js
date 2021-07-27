import React from 'react';
import { NavLink } from 'react-router-dom';

const TopHeader = () => {
	return (
		<nav className='header__top'>
			<NavLink to='/' className='link'>
				<p>Colombia</p>
			</NavLink>
			<ul className='header__top__items'>
				<li className='header__top__items__item'>
					<NavLink className='link' to='/'>
						Inicio
					</NavLink>
				</li>
				<li className='header__top__items__item'>
					<NavLink className='link' to='/contactenos'>
						Contactenos
					</NavLink>
				</li>
				<li className='header__top__items__item'>
					<NavLink className='link' to='/ayuda'>
						Ayuda
					</NavLink>
				</li>
				<li className='header__top__items__item'>
					<NavLink className='link' to='/'>
						Ir al portar de Empresas
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default TopHeader;
