import React from 'react';
import PropTypes from 'prop-types';
import Sketch from 'react-p5';
const AtomicShell = ({ shells, symbol }) => {
	return (
		<Sketch
			setup={(p5, parent) => {
				p5.createCanvas(230, 252).parent(parent);
				p5.angleMode(p5.DEGREES);
				p5.background(255, 235, 59);
			}}
			draw={p5 => {
				p5.background(255, 235, 59);
				p5.translate(p5.width / 2, p5.height / 2);
				let spacing = 20;
				p5.noStroke();
				p5.fill(74, 20, 140);
				p5.textSize(16);
				p5.textAlign(p5.CENTER);
				p5.text(symbol, 0, 5);
				for (const shell of shells) {
					p5.noFill();
					p5.strokeWeight(3);
					p5.stroke(3, 169, 244);
					p5.circle(0, 0, spacing);

					for (let i = 0; i < 360; i += 360 / shell) {
						let x = spacing * p5.cos(i);
						let y = spacing * p5.sin(i);
						p5.fill(233, 30, 99);
						p5.noStroke();
						p5.circle(x, y, 5);
					}
					spacing += 20;
				}
				// p5.noLoop();
			}}
		/>
	);
};

AtomicShell.propTypes = {
	shells: PropTypes.array.isRequired,
	symbol: PropTypes.string.isRequired
};

export default AtomicShell;
