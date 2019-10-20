import React from 'react';

const Footer = () => {
	return (
		<footer className='page-footer center'>
			<h6>
				Made with &hearts; by{' '}
				<a
					className='grey-text text-lighten-4'
					href='https://www.sololearn.com/Profile/10779261'
				>
					Ashutosh Agrawal
				</a>
			</h6>

			<div className='footer-copyright'>
				<div className='container'>
					© 2019 Elemental
					<a
						class='grey-text text-lighten-4 right'
						href='https://github.com/AshutoshAgrawal2004'
					>
						Git Repo
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
