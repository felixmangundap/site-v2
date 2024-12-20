import React from 'react'
import { FaAngleRight } from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image';

import * as style from './style.module.scss';

const ProjectTwoBento = () => {
	return (
		<div className={`${style.bentoBox} ${style.projectBoxTwo}`}>
			<a className={style.hoverOverlay} href='https://devpost.com/software/ustudents' target='_blank'>
				<div className={style.hoverOverlayContainer}>
					<div className={style.pill}>uStudents <FaAngleRight size={'0.8rem'} /></div>
				</div>
			</a>
			<StaticImage className={style.photo} src={'../images/ustudents.png'} alt={'nyc'} />
		</div>
	)
}

export default ProjectTwoBento;