import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';

import * as style from './style.module.scss';

const NightMode = () => {
	const [time, setTime] = useState('');

	useEffect(() => {
	}, [])

	return (
		<div className={style.nightMode}>
			<div className={style.day}>
				<FaSun size={20} />
			</div>
			<div className={style.night}>
				<FaMoon size={20} />
			</div>
		</div>
	)
}

export default NightMode;

