import React,{Component} from 'react'
import Aux from '../../hoc/Auxo/Auxo'
import DrawerToggle from '../../components/SideDrawer/DrawerToggle/DrawerToggle'
import css from './Categories.css'
import {Link} from 'react-router-dom'
class Cateories extends Component{
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
		let icon=(<i class="fa fa-caret-down"></i>)
			if(this.state.show){
				icon=(<i class="fa fa-caret-up"></i>)
			}
		return(
		<div className={css.Cat}>
		<div className={css.Categories} onClick={this.DisplayDropDownHandler}>
			
			<div className={css.text} onClick={this.DisplayDropDownHandler}>{icon} Categories</div>
		</div>
		<div className={css.drop} onClick={this.HideDropDownHandler}>
			<Link className={css.DropDownItems} to='/Categories/Guides'><div className={css.CategoriesItems}>Guide</div></Link>
			<Link className={css.DropDownItems} to='/Categories/Literature'><div className={css.CategoriesItems}>Literature</div></Link>
			<Link className={css.DropDownItems} to='/Categories/Philosophy'><div className={css.CategoriesItems}>Philosophy</div></Link>
			<Link className={css.DropDownItems} to='/Categories/Science-Fiction'><div className={css.CategoriesItems}>Science Fiction</div></Link>
			<Link className={css.DropDownItems} to='/Categories/Horror'><div className={css.CategoriesItems}>Horror</div></Link>
			<Link className={css.DropDownItems} to='/Categories/Childern'><div className={css.CategoriesItems}>Childern's</div></Link>
			<Link className={css.DropDownItems} to='/Categories/Religion'><div className={css.CategoriesItems}>Religion</div></Link>
			<Link className={css.DropDownItems} to='/Categories/Biographies'><div className={css.CategoriesItems}>Biographies</div></Link>
			<Link className={css.DropDownItems} to='/Categories/Poetry'><div className={css.CategoriesItems}>Poetry</div></Link>
		</div>
		</div>
		);
	}	
}
export default Cateories