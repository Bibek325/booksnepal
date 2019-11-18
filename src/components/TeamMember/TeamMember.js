import React from 'react'
import css from './TeamMember.css'
const TeamMember=(props)=>{
	return(
		<div className={css.TeamMember}>
			<div className={css.ImageDiv}><img className={css.Image} src={props.member.image}/></div>
			<div className={css.Name}>{props.member.Name}</div>
			<div className={css.Position}>{props.member.position}</div>

		</div>

		);
}
export default TeamMember