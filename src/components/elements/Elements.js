import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getElements } from '../../actions/elementActions';
import ElementItem from './ElementItem';
import Preloader from '../layout/Preloader';
const Elements = ({
	elements: { elements, filtered_elements, loading },
	getElements
}) => {
	useEffect(() => {
		getElements();

		//eslint-disable-next-line
	}, []);

	if (loading || elements === null) {
		return <Preloader />;
	}
	if (filtered_elements !== null) {
		return (
			<div className='row'>
				{filtered_elements.map(element => (
					<div className='col s12 m6 l4 xl3'>
						<ElementItem
							element={elements[element]}
							name={element}
						/>
					</div>
				))}
			</div>
		);
	}
	if (elements.length !== 0) {
		return (
			<div className='row'>
				{Object.keys(elements).map(element => (
					<div className='col s12 m6 l4 xl3'>
						<ElementItem
							key={elements[element].number}
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
