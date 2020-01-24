import React,{Component} from 'react'
import css from './Top.css'
import Login from '../../../containers/Register/Login/Login'
import Register from '../../../containers/Register/Register'
import Aux from '../../../hoc/Auxo/Auxo'
import { connect } from 'react-redux'
class Top extends Component{
	render(){
		let log = <Aux>
			<div><Register/></div>
				<div><Login/></div>
		</Aux>
		if(this.props.isAuth){
			log=<div classname={css.logout}><a href="/">
						<i className="fa fa-sign-in" aria-hidden="true"></i>
							Logout
							</a>
							</div>
		}
		return(
		<div className={css.Top}>
			<div className={css.Call}>
			<div><i className="fa fa-phone" aria-hidden="true"></i> Call Us +977 9818445068 </div>
			<div className={css.Connect}> Connect With Us -<a className={css.SocialSiteFb} href='https://www.facebook.com/booksnepal1/' target='_blank'> <i className="fa fa-facebook-square" aria-hidden="true"></i></a><a className={css.SocialSiteInsta} href='https://www.instagram.com/booksnepal1/?fbclid=IwAR1HmgMojRMibMU-x6L-pGYj5wzHeHL591Rz3hw4ENiBh4H92Cckpc72dbw' target='_blank'> <i className="fa fa-instagram" aria-hidden="true"></i></a></div>
			
			</div>
			<div className={css.Login}>
			{log}
				
			</div>
		</div>
		);
	}
}
const mapStateToProps=(state)=>{
	return{
		isAuth:state.isAuth
	}
}
export default connect(mapStateToProps)(Top)