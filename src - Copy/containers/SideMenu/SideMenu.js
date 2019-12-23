import React,{Component} from 'react'
import Aux from '../../hoc/Auxo/Auxo'
import DrawerToggle from '../../components/SideDrawer/DrawerToggle/DrawerToggle'
import css from './SideMenu.css'
import {Link} from 'react-router-dom'
class SideMenu extends Component{
	state={
		show:false
	}
	DisplayDropDownHandler=()=>{
		this.setState({show:!this.state.show})
	}
	HideDropDownHandler=()=>{
		this.setState({show:false})
	}
	render(){
		let attachedClass=[css.DropDown,css.Close]
			if(this.state.show){
		attachedClass=[css.DropDown,css.Open]
	}
		let icon=(<i class="fa fa-bars"></i>)
			if(this.state.show){
				icon=(<i class="fa fa-caret-up"></i>)
			}
		return(
		<div className={css.Cat}>
		<div className={css.Categories} onClick={this.DisplayDropDownHandler}>
			
			<div className={css.text}>Menu {icon}</div>
		</div>
		<div className={attachedClass.join(' ')} onClick={this.HideDropDownHandler}>
			<Link to='/API'><div className={css.CategoriesItems}>Api Search</div></Link>
			<Link to='/Menu/feedback'><div className={css.CategoriesItems}>Feedback</div></Link>
			<Link to='/Menu/new&updates'><div className={css.CategoriesItems}>News & Discussions</div></Link>
			<Link to='/Menu/publicOpinions'><div className={css.CategoriesItems}>public opinions</div></Link>
		</div>
		</div>
		);
	}	
}
export default SideMenu