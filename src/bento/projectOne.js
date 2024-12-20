import React from 'react'
import { FaAngleRight } from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image';

import * as style from './style.module.scss';

const ProjectOneBento = () => {
	return (
		<div className={`${style.bentoBox} ${style.projectBoxOne}`}>
			<a className={style.hoverOverlay} href='https://datefromnow.com/' target='_blank'>
				<div className={style.hoverOverlayContainer}>
					<div className={style.pill}>datefromnow <FaAngleRight size={'0.8rem'} /></div>
				</div>
			</a>
			<StaticImage className={style.photo} src={'../images/date.png'} alt={'nyc'} />
		</div>
	)
}

export default ProjectOneBento;