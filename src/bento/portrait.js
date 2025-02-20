import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';

import * as style from './style.module.scss';

const PortraitBento = () => {
	return (
		<div className={`${style.bentoBox} ${style.portraitBox}`}>
			<div className={style.hoverOverlay}></div>
			<StaticImage className={style.photo} src='../images/self.jpeg' alt='Felix' />
		</div>
	)
}

export default PortraitBento;