import React from 'react';

const Footer = () => {
	return (
		<footer class='page-footer'>
			<div class='container'>
				<div class='row'>
					<div class='col l6 s12'>
						<h5>Made with &hearts; by <a href="https://www.sololearn.com/Profile/10779261">Ashutosh Agrawal</a></h5>
					</div>
					<div class='col l4 offset-l2 s12'>
						<h5 class='white-text'>Links</h5>
						<ul>
							<li>
								<a class='grey-text text-lighten-3' href='#!'>
									Link 1
								</a>
							</li>
							<li>
								<a class='grey-text text-lighten-3' href='#!'>
									Link 2
								</a>
							</li>
							<li>
								<a class='grey-text text-lighten-3' href='#!'>
									Link 3
								</a>
							</li>
							<li>
								<a class='grey-text text-lighten-3' href='#!'>
									Link 4
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class='footer-copyright'>
				<div class='container'>
					© 2019 Elemental
					<a class='grey-text text-lighten-4 right' href='https://github.com/AshutoshAgrawal2004'>
            Git Repo
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
