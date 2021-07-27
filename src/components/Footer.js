import React, { useState } from 'react';

import FooterTop from './FooterTop';
import FooterMiddle from './FooterMiddle';
import FooterButtom from './FooterButtom';

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
			text: 'Inicio',
		},
		{
			path: '/',
			text: 'Reporter e Informes',
		},
		{
			path: '/',
			text: 'Entorno Educativo',
		},
		{
			path: '/',
			text: 'Contáctenos, quejas y reclamos',
		},
		{
			path: '/',
			text: 'Avizo de Privacidad',
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
	default_options: [
		{
			path: '/',
			text: 'Inicio',
		},
		{
			path: '/',
			text: 'Productos y Servicios',
		},
		{
			path: '/',
			text: 'Entorno Educativo',
		},
		{
			path: '/',
			text: 'Terminos y Condiciones',
		},
		{
			path: '/',
			text: 'Información del elempleo.com',
		},
		{
			path: '/',
			text: 'Trabaja con nosotros',
		},
		{
			path: '/',
			text: 'Paute con elempleo.com',
		},
		{
			path: '/',
			text: 'Contactenos, quejas y reclamos',
		},
		{
			path: '/',
			text: 'Aviso de privacidad',
		},
	],
};

const Footer = () => {
	const [auth, setAuth] = useState(false);
	const [role, setRole] = useState(null);

	return (
		<footer className='footer'>
			{auth ? (
				<FooterTop auth={auth} role={role} {...props} />
			) : (
				<FooterTop auth={auth} role={null} {...props} />
			)}
			<FooterMiddle />
			<FooterButtom />
		</footer>
	);
};

export default Footer;
