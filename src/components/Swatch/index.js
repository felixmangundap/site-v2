import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';

import * as style from './style.module.scss';

const Swatch = () => {
	const [time, setTime] = useState('');

	useEffect(() => {
	}, [])

	return (
		<div className={style.Swatch}>
			<div className={style.day}>
				
			</div>
			<div className={style.night}>
				
			</div>
		</div>
	)
}

export default Swatch;

