import React,{Component} from 'react'
import Team from './Team/Team'
import OurMission from './OurMission/OurMission'

import css from './AboutUs.css'
const AboutUs =()=>{
	return(
		<div className={css.AboutUs}>
			<OurMission/>
			<Team/>
		</div>
		)
}
export default AboutUs