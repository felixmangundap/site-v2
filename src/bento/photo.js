import React from 'react'
import { FaAngleRight } from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image';

import * as style from './style.module.scss';

const PhotoBento = () => {
	return (
		<>
			<div className={`${style.bentoBox} ${style.photoBox}`}>
			<a className={style.hoverOverlay} href='https://www.instagram.com/lixlens/' target='_blank'>
				<div className={style.hoverOverlayContainer}>
					<div className={style.pill}>Photography <FaAngleRight size={'0.8rem'} /></div>
				</div>
			</a>
				<StaticImage className={style.photo} src={'../images/nyc.jpg'} alt={'nyc'} />
			</div>
		</>
	)
}

export default PhotoBento;