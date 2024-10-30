import React from 'react'

import * as styleDay from './style.module.scss';
import * as styleNight from './styleNight.module.scss';

const LandingV2Bento = (props) => {
	const { nightMode } = props;
	const style = nightMode ? styleNight : styleDay;

	return (
		<div className={`${style.bentoBox} ${style.landingBox} ${style.hover}`}>
			<div>
				<p className={style.name}>Felix Mangundap</p>
				<p className={style.desc}>Software Engineer 🇨🇦</p>
			</div>
		</div>
	)
}

export default LandingV2Bento;