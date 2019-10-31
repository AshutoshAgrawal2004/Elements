import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAnElement, clearCurrent } from '../../actions/elementActions';
import Preloader from '../layout/Preloader';
import AtomicShell from './AtomicShell';
const ElementDetail = ({
	elements: { current, loading },
	getAnElement,
	clearCurrent,
	match
}) => {
	const name = match.params.name;
	useEffect(() => {
		clearCurrent();
		getAnElement(name);
		//eslint-disable-next-line
	}, []);
	if (loading || current === null) {
		return <Preloader />;
	} else if (current) {
		const {
			appearance,
			atomic_mass,
			boil,
			category,
			density,
			discovered_by,
			melt,
			molar_heat,
			number,
			phase,
			shells,
			source,
			symbol,
			summary,
			electron_configuration
		} = current;

		return (
			<div className='collection'>
				<div className='row'>
					<div className='col l4 m6 s12'>
						<div className='card center red white-text'>
							<div className='card-content'>
								<div className='num-symbol'>
									<h3 className='left'>{number}</h3>
									<h3 className='right'>{symbol}</h3>
								</div>
								<div className='element-img'>
									<img
										// src={`https://images-of-elements.com/t/${name.toLowerCase()}.png`}
										src={`https://periodictable.com/GridImages/big/${number}.JPG`}
										alt={name}
										className='activator hoverable'
									/>
								</div>
								<h4>{name}</h4>
								<h5>{atomic_mass}</h5>
							</div>
						</div>
						<div className='card center light-blue white-text'>
							<div className='card-content'>
								<h5>
									<a href={source} className='white-text'>
										Know More
									</a>
								</h5>
							</div>
						</div>
					</div>
					<div className='col l4 m6 s12'>
						<div className='card center yellow white-text'>
							<div className='card-content'>
								<AtomicShell shells={shells} symbol={symbol} />
							</div>
						</div>
						<div className='card  green white-text'>
							<div className='card-content'>
								<p className='element-info'>{summary}</p>
							</div>
						</div>
					</div>

					<div className='col l4 s12'>
						<div className='card  blue white-text'>
							<div className='card-content'>
								<table>
									<tbody>
										<tr>
											<th>Category</th>
											<td>{category}</td>
										</tr>
										<tr>
											<th>Appearance</th>
											<td>{appearance}</td>
										</tr>
										<tr>
											<th>Discovered By</th>
											<td>{discovered_by}</td>
										</tr>
										<tr>
											<th>Molar Heat</th>
											<td>
												{molar_heat} J K<sup>-1</sup>mol
												<sup>-1</sup>
											</td>
										</tr>
										<tr>
											<th>Electron Configuration</th>
											<td>{electron_configuration}</td>
										</tr>
										<tr>
											<th>Boiling Point</th>
											<td>{boil} K</td>
										</tr>
										<tr>
											<th>Melting Point</th>
											<td>{melt} K</td>
										</tr>
										<tr>
											<th>Phase</th>
											<td>{phase}</td>
										</tr>
										<tr>
											<th>Density</th>
											<td>
												{density} g cm<sup>-3</sup>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

ElementDetail.propTypes = {
	elements: PropTypes.object.isRequired,
	getAnElement: PropTypes.func.isRequired,
	clearCurrent: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	elements: state.elements
});
export default connect(
	mapStateToProps,
	{ getAnElement, clearCurrent }
)(ElementDetail);
