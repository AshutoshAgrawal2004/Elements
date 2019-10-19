import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAnElement } from '../../actions/elementActions';
import Preloader from '../layout/Preloader';
const ElementDetail = ({
	elements: { current, loading },
	getAnElement,
	match
}) => {
	useEffect(() => {
		const elementName = match.params.name;
		getAnElement(elementName);
		//eslint-disable-next-line
	}, []);
	if (loading || current === null) {
		return <Preloader />;
	} else if (current) {
		const { symbol } = current;
		return <h1>{symbol}</h1>;
	}
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
