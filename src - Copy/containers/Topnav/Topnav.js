import React,{Component} from 'react'
import Logo from '../../components/Logo/Logo'
import TopBar from './TopBar/TopBar'
import BottomMenu from '../../components/BottomMenu/BottomMenu'
import TopMenu from '../../components/TopMenu/TopMenu'
import css from './Topnav.css'
class Topnav extends Component{
	render(){
		return(
				<div className={css.Topnav}>
				<TopBar/>
				<div className={css.FirstDiv}>
				<Logo/>	
					<TopMenu/>	

				</div>

			
					<BottomMenu/>
			
			</div>

			);
	}
}
export default Topnav