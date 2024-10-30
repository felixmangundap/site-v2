import React from 'react'

import * as style from './style.module.scss';

const QuoteBento = () => {
	return (
		<div className={`${style.bentoBox} ${style.quoteBox} ${style.hover}`}>
			<p className={style.quote}>
				"Life is like a game of chess."
				<span className={style.author}>- Allan Ruffus</span>
			</p>
		</div>
	)
}

export default QuoteBento;