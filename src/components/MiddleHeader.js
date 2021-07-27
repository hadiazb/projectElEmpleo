import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const MiddleHeader = ({ isLogged, handleClick, role, handleClickLogout }) => {
	const flag = role === 0 || role === 1 || role === 2;

	return (
		<Fragment>
			<nav className='header__container__middle'>
				<img
					className='header__container__middle__image'
					src='https://uatazure.elempleo.com/images/logo-marca-2.png'
					alt='logo'
				/>
				{isLogged && flag ? (
					<div className='header__container__middle__sesion'>
						<div className='header__container__middle__sesion__head'>
							<p className='header__container__middle__sesion__head__user'>
								Bits Gestor Contenido BU - AAA Universidad Para Proposito De
								Prueba
							</p>
							<span className='header__container__middle__sesion__head__status'>
								<Link
									to='/'
									className='header__container__middle__sesion__head__status__profile'
								>
									Mi cuenta
								</Link>
								<Link
									to='/'
									className='header__container__middle__sesion__head__status__close'
									onClick={handleClickLogout}
								>
									Cerrar sesión
								</Link>
							</span>
						</div>
						<div className='header__container__middle__sesion__bandera'>
							Bandera
						</div>
					</div>
				) : (
					<button
						className='header__container__middle__buttom'
						onClick={handleClick}
					>
						Iniciar sesión
					</button>
				)}
			</nav>
		</Fragment>
	);
};

export default MiddleHeader;
