import React from 'react'
import { SiAmazonwebservices, SiFirebase, SiGraphql, SiJavascript, SiNodedotjs, SiPython, SiReact, SiRedux, SiTypescript } from 'react-icons/si';

import * as style from './style.module.scss';

const SummaryBento = () => {
	return (
		<div className={`${style.bentoBox} ${style.summaryBox} ${style.hover}`}>
			<p className={style.header}>About Me</p>
			<p className={style.paragraph}>Hi, I'm Felix, a software engineer based in Toronto, Canada.</p>
			<p className={style.paragraph}>Back in 2021, I graduated from the University of Waterloo with Bachelor of Computer Science.</p>
			<div className={style.arsenalBox}>
				<p className={style.paragraph}>My tech stack includes:</p>
				<div className={style.arsenal}>
					<SiJavascript className={style.iconLink} />
					<SiTypescript className={style.iconLink} />
					<SiPython className={style.iconLink} />
					<div className={style.divider} />
					<SiReact className={style.iconLink} />
					<SiRedux className={style.iconLink} />
					<div className={style.divider} />
					<SiFirebase className={style.iconLink} />
					<SiAmazonwebservices className={style.iconLink} />
					<div className={style.divider} />
					<SiNodedotjs className={style.iconLink} />
					<SiGraphql className={style.iconLink} />
				</div>
			</div>
			<p className={style.paragraph}>Beyond coding, I'm passionate about photography, traveling, the art of coffee!</p>
			<p className={style.paragraph}>My goal for the next few years is to travel more and experience what the world has to offer.</p>
			<p>Don't be shy, let's connect!</p>
		</div>
	)
}

export default SummaryBento;