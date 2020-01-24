import React from 'react'
import css from './Top.css'
import Login from '../../../containers/Register/Login/Login'
import Register from '../../../containers/Register/Register'
import Aux from '../../../hoc/Auxo/Auxo'
const Top=()=>{
	return(
		<div className={css.Top}>
			<div className={css.Call}>
			<div><i className="fa fa-phone" aria-hidden="true"></i> Call Us +977 9818445068 </div>
			<div className={css.Connect}> Connect With Us -<a className={css.SocialSiteFb} href='https://www.facebook.com/bibek.g.lama' target='_blank'> <i className="fa fa-facebook-square" aria-hidden="true"></i></a><a className={css.SocialSiteInsta} href='https://www.instagram.com' target='_blank'> <i className="fa fa-instagram" aria-hidden="true"></i></a></div>
			
			</div>
			<div className={css.Login}>
				
				<div><Register/></div>
				<div><Login/></div>
			</div>
		</div>
		);
}
export default Top