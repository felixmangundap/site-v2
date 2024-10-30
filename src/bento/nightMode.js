import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';

import * as style from './style.module.scss';
import NightMode from '../components/NightMode';

const NightModeBento = () => {
	const [time, setTime] = useState('');

	useEffect(() => {
	}, [])

	return (
		<div className={`${style.bentoBox} ${style.nightModeBox} ${style.hover}`}>
			<NightMode />
		</div>
	)
}

export default NightModeBento;