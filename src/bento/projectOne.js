import React from 'react'
import { FaAngleRight } from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image';

import * as style from './style.module.scss';

const ProjectOneBento = () => {
	return (
		<div className={`${style.bentoBox} ${style.projectBoxOne}`}>
			<a className={style.hoverOverlay}>
				<div className={style.hoverOverlayContainer}>
					<div className={style.pill}>project One <FaAngleRight size={'0.8rem'} /></div>
				</div>
			</a>
			<StaticImage className={style.photo} src={'../images/nyc.jpg'} alt={'nyc'} />
		</div>
	)
}

export default ProjectOneBento;