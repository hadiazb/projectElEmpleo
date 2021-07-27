import React from 'react';
import { Link } from 'react-router-dom';

const FooterTop = ({
	auth,
	role,
	routes_u_interno,
	routes_u_contenido,
	routes_u_administrador,
	default_options,
}) => {
	const putLinks = () => {
		if (role === 0 && auth) {
			return (
				<ul className='footer__top__items'>
					{routes_u_interno.map((option, index) => (
						<li key={index} className='footer__top__items__item'>
							<Link className='footer__top__items__item__link' to={option.path}>
								{option.text}
							</Link>
						</li>
					))}
				</ul>
			);
		}

		if (role === 1 && auth) {
			return (
				<ul className='footer__top__items'>
					{routes_u_contenido.map((option, index) => (
						<li key={index} className='footer__top__items__item'>
							<Link className='footer__top__items__item__link' to={option.path}>
								{option.text}
							</Link>
						</li>
					))}
				</ul>
			);
		}

		if (role === 2 && auth) {
			return (
				<ul className='footer__top__items'>
					{routes_u_administrador.map((option, index) => (
						<li key={index} className='footer__top__items__item'>
							<Link className='footer__top__items__item__link' to={option.path}>
								{option.text}
							</Link>
						</li>
					))}
				</ul>
			);
		}

		return (
			<ul className='footer__top__items'>
				{default_options.map((option, index) => (
					<li key={index} className='footer__top__items__item'>
						<Link className='footer__top__items__item__link' to={option.path}>
							{option.text}
						</Link>
					</li>
				))}
			</ul>
		);
	};

	return <nav className='footer__top'>{putLinks()}</nav>;
};

export default FooterTop;
