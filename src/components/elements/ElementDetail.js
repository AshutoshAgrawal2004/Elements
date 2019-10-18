import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAnElement } from '../../actions/elementActions';
const ElementDetail = ({
	elements: { elements, loading },
	getAnElement,
	match
}) => {
	useEffect(() => {
		const elementName = match.params.name;
		getAnElement(elementName);
		//eslint-disable-next-line
	}, []);

	return <div>A particular element</div>;
};

ElementDetail.propTypes = {
	elements: PropTypes.object.isRequired,
	getAnElement: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
	elements: state.elements
});
export default connect(
	mapStateToProps,
	{ getAnElement }
)(ElementDetail);
