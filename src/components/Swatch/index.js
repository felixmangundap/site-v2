import React, { useEffect, useState } from 'react'

import * as style from './style.module.scss';

const Swatch = () => {
	const [color, setColor] = useState('');

	useEffect(() => {
	}, [])

	return (
		<div className={style.swatch}>
		</div>
	)
}

export default Swatch;

