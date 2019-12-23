import React,{Component} from 'react'
import css from './SideMenuBar.css'
import MenuItem from '../MenuItem/MenuItem'
import BackDrop from '../../../components/UI/BackDrop/BackDrop'
import Aux from '../../../hoc/Auxo/Auxo'
class SideMenuBar extends Component{
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
	render(){
		let attachedClass=[css.SideMenuBar,css.Close]
	if(this.props.show){
		attachedClass=[css.SideMenuBar,css.Open]
	}
	return(
		<Aux>
		<BackDrop show={this.props.show} clicked={this.props.clicked}/>
		<div className={attachedClass.join(' ')}>
		<div className={css.SideMenuItem}>
				{this.state.menuItems.map((item,key)=>(
							<MenuItem clicked={this.props.clicked} key={key} item={item}/>))}
		</div>
		</div>
		</Aux>
		);
	}
}
export default SideMenuBar