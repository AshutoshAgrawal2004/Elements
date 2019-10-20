import React from 'react';

const About = () => {
	return (
		<div className='container center'>
			<h1>About</h1>
			<div className='collection'>
				<div className='card'>
					<h3 className='card-title'>Made By</h3>

					<img
						src='https://avatars0.githubusercontent.com/u/50054271?s=460&v=4'
						alt='Ashutosh Agrawal'
						style={{ borderRadius: '50%', width: '75%' }}
					/>

					<h4>Ashutosh Agrawal</h4>
					<div className='divider'></div>
					<ul>
						<li>
							<a
								href='https://github.com/AshutoshAgrawal2004'
								target='_blank'
								rel='noopener noreferrer'
							>
								Github
							</a>
						</li>
						<li>
							<a
								href='https://www.sololearn.com/Profile/10779261'
								target='_blank'
								rel='noopener noreferrer'
							>
								Sololearn
							</a>
						</li>
					</ul>
				</div>
				<div className='card'>
					<h3 className='card-title'>Resources Used</h3>
					<table className='centered'>
						<tbody>
							<tr>
								<th>JS Front End</th>
								<td>React</td>
							</tr>
							<tr>
								<th>State Management</th>
								<td>Redux</td>
							</tr>
							<tr>
								<th>CSS Framework</th>
								<td>Materialize</td>
							</tr>
							<tr>
								<th>API</th>
								<td>
									Chemistry Data API by{' '}
									<a
										href='https://github.com/Aanisha/ChemistryDataAPI'
										target='_blank'
										rel='noopener noreferrer'
									>
										Aanisha
									</a>
								</td>
							</tr>
							<tr>
								<th>Data</th>
								<td>
									Json by{' '}
									<a
										href='https://github.com/Bowserinator/Periodic-Table-JSON'
										target='_blank'
										rel='noopener noreferrer'
									>
										Bowserinator
									</a>
								</td>
							</tr>
							<tr>
								<th>Images</th>
								<td>
									<a
										href='https://periodictable.com/'
										target='_blank'
									>
										PeriodicTable.com
									</a>
								</td>
							</tr>
							<tr>
								<th>Fonts</th>
								<td>
									<a
										href='https://fonts.google.com/specimen/Oswald'
										target='_blank'
										rel='noopener noreferrer'
									>
										Oswald
									</a>
								</td>
							</tr>
							<tr>
								<th>Atom Shell Sketch</th>
								<td>
									<a
										href='https://github.com/Gherciu/react-p5'
										target='_blank'
										rel='noopener noreferrer'
									>
										React-p5.js
									</a>
								</td>
							</tr>
							<tr>
								<th>Code Editor</th>
								<td>VS Code</td>
							</tr>
							<tr>
								<th>Web Browser</th>
								<td>Chrome</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default About;
