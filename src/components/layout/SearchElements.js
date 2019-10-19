import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchElements, clearSearch } from '../../actions/elementActions';
const SearchElements = ({
	elements: { filtered_elements },
	searchElements,
	clearSearch
}) => {
	const text = useRef('');
	useEffect(() => {
		if (filtered_elements === null) {
			text.current.value = '';
		}
	});
	const onChange = e => {
		if (text.current.value !== '') {
			searchElements(e.target.value);
		} else {
			clearSearch();
		}
	};

	return (
		<div className='navbar-fixed'>
			<nav>
				<div className='nav-wrapper'>
					<form>
						<div className='input-field'>
							<input
								id='search'
								type='search'
								ref={text}
								aria-label='Filter elements...'
								placeholder='Search Elements....'
								className='form-control mr-sm-2'
								onChange={onChange}
							/>
							<label className='label-icon' htmlFor='search'>
								<i className='material-icons'>search</i>
							</label>
							<i className='material-icons'>close</i>
						</div>
					</form>
				</div>
			</nav>
		</div>
	);
};

SearchElements.propTypes = {
	elements: PropTypes.object.isRequired,
	searchElements: PropTypes.func.isRequired,
	clearSearch: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
	elements: state.elements
});
export default connect(
	mapStateToProps,
	{ searchElements, clearSearch }
)(SearchElements);
