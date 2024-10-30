import React from 'react'

import * as style from './style.module.scss';

const SummaryDetail = ({location, title}) => {

	return (
		<div className={style.detail}>
			<p className={style.location}>{location}</p>
			<p className={style.title}>{title}</p>
		</div>
	)
}

export default SummaryDetail;