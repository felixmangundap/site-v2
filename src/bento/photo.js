import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';

import * as style from './style.module.scss';

const PhotoBento = () => {
	return (
		<>
			<div className={`${style.bentoBox} ${style.photoBox}`}>
				<div className={style.hoverOverlay}></div>
				<StaticImage className={style.photo} src={'../images/nyc.jpg'} alt={'nyc'} />
			</div>
			{/* <div className={`${style.bentoBox} ${style.photoBoxLeft}`}>
				<p>🥐</p>
			</div>
			<div className={`${style.bentoBox} ${style.photoBoxRight}`}>
				<p>🥐</p>
			</div> */}
		</>
	)
}

export default PhotoBento;