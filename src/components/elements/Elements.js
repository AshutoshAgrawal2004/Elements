import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getElements } from '../../actions/elementActions';
import ElementItem from './ElementItem';
import Preloader from '../layout/Preloader';
const Elements = ({ elements: { elements, loading }, getElements }) => {
	useEffect(() => {
		getElements();

		//eslint-disable-next-line
	}, []);
	if (loading || elements === null) {
		return <Preloader />;
	}
	if (elements.length !== 0) {
		console.log(elements);
		// for (const element in elements) {
		// 	console.log(element, elements[element]);
		// }
		return (
			<div className='row'>
				{Object.keys(elements).map(element => (
					<div className='col s12 m4 l3 xl2'>
						<ElementItem
							element={elements[element]}
							name={element}
						/>
					</div>
				))}
			</div>
		);
	}
	return <h1>hello</h1>;
};

Elements.propTypes = {
	elements: PropTypes.object.isRequired,
	getElements: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
	elements: state.elements
});
export default connect(
	mapStateToProps,
	{ getElements }
)(Elements);
