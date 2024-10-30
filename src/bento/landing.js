import React from 'react'

import * as styleDay from './style.module.scss';
import * as styleNight from './styleNight.module.scss';

const LandingBento = (props) => {
	const { nightMode } = props;
	const style = nightMode ? styleNight : styleDay;

	return (
		<div className={`${style.bentoBox} ${style.landingBox} ${style.hover}`}>
			<div>
				<p>Hi, I'm <b>Felix</b>, a software engineer based in Toronto, Canada.</p>
				<p>Previously I studied Computer Science at the University of Waterloo.</p>
				<p>Beyond coding, i enjoy photography, gaming, and all things nature!</p>
			</div>
		</div>
	)
}

export default LandingBento;