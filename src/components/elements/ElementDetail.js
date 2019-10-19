import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAnElement } from '../../actions/elementActions';
import Preloader from '../layout/Preloader';
import AtomicShell from './AtomicShell';
const ElementDetail = ({
	elements: { current, loading },
	getAnElement,
	match
}) => {
	const name = match.params.name;
	useEffect(() => {
		getAnElement(name);
		//eslint-disable-next-line
	}, []);
	if (loading || current === null) {
		return <Preloader />;
	} else if (current) {
		const {
			atomic_mass,
			boil,
			category,
			density,
			discovered_by,
			melt,
			number,
			shells,
			symbol,
			summary,
			electron_configuration
		} = current;

		return (
			<div className='collection'>
				<div className={`card center red white-text`}>
					<div className='card-content'>
						<h3 className='left-align'>{number}</h3>
						<div className='card-image'>
							<img
								// src={`https://images-of-elements.com/t/${name.toLowerCase()}.png`}
								src={`https://periodictable.com/GridImages/small/${number}.JPG`}
								alt={name}
								className='activator element-img'
							/>
							<span className='card-title element-symbol'>
								{symbol}
							</span>
						</div>
						<h4>{name}</h4>
						<h5>{atomic_mass}</h5>
					</div>
				</div>
				<div className={`card center yellow white-text`}>
					<div className='card-content'>
						<AtomicShell shells={shells} symbol={symbol} />
					</div>
				</div>
			</div>
		);
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
