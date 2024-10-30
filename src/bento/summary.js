import React from 'react'

import * as style from './style.module.scss';
import SummaryDetail from '../components/SummaryDetail';

const SummaryBento = () => {
	return (
		<div className={`${style.bentoBox} ${style.summaryBox} ${style.hover}`}>
			<p>About Me</p>
			<p>education</p>
			<SummaryDetail
				location={'University of Waterloo'}
				title={'Bachelor of Computer Science'}
				/>
			<p>work</p>
			<SummaryDetail
				location={'Lifion by ADP'}
				title={'Software Engineer Intern'}
			/>
			<SummaryDetail
				location={'IBM'}
				title={'Application Developer Intern'}
			/>
			<SummaryDetail
				location={'Ontario Institute for Cancer Research'}
				title={'Software Developer Intern'}
			/>
			<SummaryDetail
				location={'Finovertech'}
				title={'Frontend Software Developer Intern'}
			/>
		</div>
	)
}

export default SummaryBento;