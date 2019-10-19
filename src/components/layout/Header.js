import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
	return (
		<Fragment>
			<div className='navbar-fixed'>
				<nav>
					<div className='nav-wrapper'>
						<Link to='#' className='brand-logo'>
							Elements
						</Link>
						<Link
							href='#'
							data-target='mobile-demo'
							className='sidenav-trigger'
						>
							<i className='material-icons'>menu</i>
						</Link>
						<ul className='right hide-on-med-and-down'>
							<li>
								<Link href='sass.html'>About</Link>
							</li>
							<li>
								<Link href='badges.html'>Source</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			<ul className='sidenav' id='mobile-demo'>
				<li>
					<Link to='sass.html'>About</Link>
				</li>
				<li>
					<Link to='badges.html'>Source</Link>
				</li>
			</ul>
		</Fragment>
	);
};

export default Header;
