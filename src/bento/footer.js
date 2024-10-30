import React from 'react'

import * as style from './style.module.scss';

const FooterBento = () => {
	return (
		<div className={`${style.bentoBox} ${style.footerBox} ${style.hover}`}>
			<p>© 2024 Felix M ☕️</p>
		</div>
	)
}

export default FooterBento;