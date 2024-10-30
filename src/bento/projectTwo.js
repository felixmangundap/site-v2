import React from 'react'
import { FaAngleRight } from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image';

import * as style from './style.module.scss';

const ProjectTwoBento = () => {
	return (
		<div className={`${style.bentoBox} ${style.projectBoxTwo}`}>
			<a className={style.hoverOverlay}>
				<div className={style.hoverOverlayContainer}>
					<div className={style.pill}>uStudents <FaAngleRight size={'0.8rem'} /></div>
				</div>
			</a>
			<StaticImage className={style.photo} src={'../images/nyc.jpg'} alt={'nyc'} />
		</div>
	)
}

export default ProjectTwoBento;