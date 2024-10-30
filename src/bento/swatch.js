import React, { useEffect, useState } from 'react'

import * as style from './style.module.scss';
import Swatch from '../components/Swatch';

const SwatchBento = () => {
	const [time, setTime] = useState('');

	useEffect(() => {
	}, [])

	return (
		<div className={`${style.bentoBox} ${style.swatchBox} ${style.hover}`}>
			<Swatch />
		</div>
	)
}

export default SwatchBento;