import React from 'react'

import * as style from './style.module.scss';

const SquareBento = ({ children }) => {
	return (
		<div className={`${style.bentoBox} ${style.squareBox} ${style.hover}`}>
			{ children }
		</div>
	)
}

export default SquareBento;