import React, { Fragment } from 'react';
import Elements from '../elements/Elements';
import SearchElements from '../layout/SearchElements';

const Home = () => {
	return (
		<Fragment>
			<SearchElements />
			<div className='container'>
				<Elements />
			</div>
		</Fragment>
	);
};

export default Home;
