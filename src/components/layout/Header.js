import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
	return (
		<Fragment>
			<div className='navbar-fixed'>
				<nav>
					<div className='nav-wrapper'>
						<Link to='#' className='brand-logo'>
							Elemental
						</Link>
						<a
							href='#'
							data-target='mobile-demo'
							className='sidenav-trigger'
						>
							<i className='material-icons'>menu</i>
						</a>
						<ul className='right hide-on-med-and-down'>
							<li className='active'>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/about'>About</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			<ul className='sidenav' id='mobile-demo'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</Fragment>
	);
};

export default Header;
