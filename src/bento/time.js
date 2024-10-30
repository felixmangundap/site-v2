import React, { useEffect, useState } from 'react'
import { format } from "date-fns";

import * as style from './style.module.scss';

const TimeBento = () => {
	const [time, setTime] = useState('');

  useEffect(() => {
    setInterval(() => {
			const currentTime = format(new Date(), "hh:mm:ss a")

      setTime(currentTime);
    }, 1000)

  }, [])

	return (
		<div className={`${style.bentoBox} ${style.timeBox} ${style.hover}`}>
			<p className={style.time}>{time}</p>
		</div>
	)
}

export default TimeBento;