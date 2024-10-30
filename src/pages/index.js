import React from 'react'
import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa'

import '../styles/style.scss'
import * as style from '../styles/main.scss'

import { SEO } from '../components/seo';
import Resume from '../files/Resume_Felix.pdf';

import PhotoBento from '../bento/photo'
import TimeBento from '../bento/time'
import PortraitBento from '../bento/portrait'
import NightModeBento from '../bento/nightMode'
import FooterBento from '../bento/footer'
import SquareBento from '../bento/square'
import ProjectOneBento from '../bento/projectOne'
import ProjectTwoBento from '../bento/projectTwo'
import QuoteBento from '../bento/quote'
import SummaryBento from '../bento/summary';
import LandingV2Bento from '../bento/landingV2';
import SwatchBento from '../bento/swatch';

const IndexPage = (props) => {

  return (
    <div>
      <div className="container">
        <div className="bento-container">
          {/* <NightModeBento /> */}
          <SwatchBento />
          <LandingV2Bento />
          <PortraitBento />
          <SummaryBento />
          <PhotoBento />
          <ProjectOneBento />
          <ProjectTwoBento />
          <TimeBento />
          <QuoteBento />
          <FooterBento />
          <SquareBento>
            <a className={style.squareButton} href='https://www.linkedin.com/in/felix-mangundap/' rel="noopener noreferrer" target='_blank'>
              <FaLinkedin size={20} />
            </a>
          </SquareBento>
          <SquareBento>
            <a className={style.squareButton} href='https://github.com/felixmangundap' rel="noopener noreferrer" target='_blank'>
              <FaGithub size={20} />
            </a>
          </SquareBento>
          <SquareBento>
            <a className={style.squareButton} href={Resume} rel="noopener noreferrer" target='_blank'>
              <FaFileAlt size={20} />
            </a>
          </SquareBento>
          <SquareBento>
            <a className={style.squareButton} href='mailto:felix.mangundap@gmail.com'>
              <FaEnvelope size={20} />
            </a>
          </SquareBento>
        </div>
      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => (
  <SEO />
)
