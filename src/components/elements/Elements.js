import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getElements } from '../../actions/elementActions';
const Elements = ({ elements, getElements }) => {
	useEffect(() => {
		getElements();
	}, []);
	return <div>Elements</div>;
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
