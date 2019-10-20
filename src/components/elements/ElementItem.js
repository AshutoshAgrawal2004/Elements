import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const ElementItem = ({ element, name }) => {
	const colors = [
		'red',
		'pink',
		'purple',
		'deep-purple',
		'indigo',
		'blue',
		'light-blue',
		'cyan',
		'teal',
		'green',
		'light-green',
		'lime',
		'yellow',
		'amber',
		'orange',
		'deep-orange',
		'brown',
		'grey',
		'blue-grey'
	];
	const { symbol, atomic_mass, number, summary } = element;
	const color = colors[(number - 1) % 19];
	return (
		<div className={`card center ${color} white-text hoverable`}>
			<div className='card-content'>
				<div className='num-symbol'>
					<h3 className='left activator'>{number}</h3>
					<h3 className='right activator'>{symbol}</h3>
				</div>
				<div className='element-img'>
					<img
						// src={`https://images-of-elements.com/t/${name.toLowerCase()}.png`}
						src={`https://periodictable.com/GridImages/big/${number}.JPG`}
						alt={name}
						className='activator hoverable'
					/>
				</div>
				<h4 className='activator'>{name}</h4>
				<h5 className='activator'>{atomic_mass}</h5>
			</div>
			<div className={`card-reveal  ${color}`}>
				<span className='card-title text-darken-4'>
					{name}
					<i className='material-icons right'>close</i>
				</span>
				<p className='left-align element-info'>{summary}</p>
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

ElementItem.propTypes = {
	element: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired
};

export default ElementItem;
