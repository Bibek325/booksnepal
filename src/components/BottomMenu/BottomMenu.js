import React,{Component} from 'react'
import SideMenuBar from './SideMenuBar/SideMenuBar'
import SideDrawer from '../SideDrawer/SideDrawer'
import MenuItem from './MenuItem/MenuItem'
import {Link} from 'react-router-dom'
import	Categories from '../../containers/Categories/Categories'
import css from './BottomMenu.css'
class BottomMenu extends Component{
	state={
		menuItems:[
		{label:'Home',icon:'fa fa-home',path:'/'},
		{label:'New-Books',icon:'fa fa-book',path:'/new-books'},
		{label:'Old-books',icon:'fa fa-copy',path:'/old-books'},
		{label:'E-books',icon:'fa fa-laptop',path:'/e-books'},
		{label:'About Us',icon:'fa fa-user',path:'/about-us'}],
		showSideDrawer:false,
		showSideMenu:false,
	}
	showSideDrawerToggleHandler=()=>{
		this.setState((prevState)=>{
			return {showSideDrawer:!prevState.showSideDrawer}
		});
	}
	sideDrawerCloseHandler=()=>{
		this.setState({
			showSideDrawer:false
		});
	}
	showSideMenuBarToggleHandler=()=>{
		this.setState((prevState)=>{
			return {showSideMenu:!prevState.showSideMenu}
		});
	}
	sideMenuCloseHandler=()=>{
		this.setState({
			showSideMenu:false
		});
	}
	BackdropClickedHandler=()=>{
		alert('done')
		this.setState({showSideMenu:false})
	}

	render(){
		return(
			<div className={css.BottomMenu}>
				<SideDrawer show={this.state.showSideDrawer} clicked={this.sideDrawerCloseHandler}/>
				<SideMenuBar  show={this.state.showSideMenu} clicked={this.sideMenuCloseHandler}/>
				<div className={css.FirstDiv}>
					<Categories clicked={this.showSideDrawerToggleHandler}/>
				</div>
				<div className={css.SecondDiv}>
						{this.state.menuItems.map((item,key)=>(
							<MenuItem item={item} key={key}/>))}
						
				</div>
				<div className={css.ThirdDiv}><Link to='/API' >API Search</Link></div>	
				<div className={css.FourthDiv} onClick={this.showSideMenuBarToggleHandler}>Menu</div>
			</div>
			);
	}
}
export default BottomMenu