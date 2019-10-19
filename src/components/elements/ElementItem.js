import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const ElementItem = ({ element, name }) => {
	const { symbol, atomic_mass, number, summary } = element;
	return (
		<div className='card center'>
			<h3 className='left-align'>{number}</h3>
			<div className='card-image'>
				<img
					// src={`https://images-of-elements.com/t/${name.toLowerCase()}.png`}
					src={`https://periodictable.com/GridImages/small/${number}.JPG`}
					alt={name}
					style={elementImgStyle}
					className='activator'
				/>
				<span className='card-title' style={elementSymbolStyle}>
					{symbol}
				</span>
			</div>
			<h4>{name}</h4>
			<h5>{atomic_mass}</h5>
			<div className='card-reveal'>
				<span className='card-title grey-text text-darken-4'>
					{name}
					<i className='material-icons right'>close</i>
				</span>
				<p>{summary}</p>
				<Link
					className='waves-effect waves-light btn red'
					to={`/elements/${name}`}
				>
					<i className='material-icons right'>search</i>Know More
				</Link>
			</div>
		</div>
	);
};
const elementImgStyle = {
	borderRadius: '50%',
	width: '75%',
	margin: 'auto'
};
const elementSymbolStyle = {
	padding: '0',
	margin: '0',
	left: '45%',
	top: '45%',
	fontSize: '32px',
	fontWeight: '600'
};
ElementItem.propTypes = {
	element: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired
};

export default ElementItem;
