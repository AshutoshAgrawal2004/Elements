import React from 'react';
import PropTypes from 'prop-types';

const ElementItem = ({ element, name }) => {
	const { symbol, atomic_mass, number } = element;
	return (
		<div className='card center'>
			<h3 className='left-align'>{number}</h3>
			<div className='card-image activator'>
				<img
					src={`https://images-of-elements.com/t/${name.toLowerCase()}.png`}
					alt={name}
					style={elementImgStyle}
				/>
				<span className='card-title' style={elementSymbolStyle}>
					{symbol}
				</span>
			</div>
			<h4>{name}</h4>
			<h5>{atomic_mass}</h5>
			<div class='card-reveal'>
				<span class='card-title grey-text text-darken-4'>
					Card Title<i class='material-icons right'>close</i>
				</span>
				<p>
					Here is some more information about this product that is
					only revealed once clicked on.
				</p>
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
