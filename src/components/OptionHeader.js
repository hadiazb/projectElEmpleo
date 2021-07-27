import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const OptionHeader = ({
	role,
	routes_u_interno,
	routes_u_contenido,
	routes_u_administrador,
}) => {
	const putOption = () => {
		if (role === 0) {
			return (
				<nav className='header__container__optionheader'>
					<ul className='header__container__optionheader__items'>
						{routes_u_interno.map((link, index) => (
							<li
								key={index}
								className='header__container__optionheader__items__item'
							>
								<NavLink className='link' to={link.path}>
									{link.text}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			);
		}
		if (role === 1) {
			return (
				<nav className='header__container__optionheader'>
					<ul className='header__container__optionheader__items'>
						{routes_u_contenido.map((link, index) => (
							<li
								key={index}
								className='header__container__optionheader__items__item'
							>
								<NavLink className='link' to={link.path}>
									{link.text}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			);
		}

		if (role === 2) {
			return (
				<nav className='header__container__optionheader'>
					<ul className='header__container__optionheader__items'>
						{routes_u_administrador.map((link, index) => (
							<li
								key={index}
								className='header__container__optionheader__items__item'
							>
								<NavLink className='link' to={link.path}>
									{link.text}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			);
		}
	};

	return <Fragment>{putOption()}</Fragment>;
};

export default OptionHeader;
