import React,{Component} from 'react'
import kta from '../../assets/hero.png'
import {  Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import MapDisplay from '../../components/UI/MapDisplay/MapDisplay'
import css from './Footer.css'
import Aux from '../../hoc/Auxo/Auxo'

class Footer extends Component{
	state={
		modal:false
	}
	
  	modalHandler=()=>{
		this.setState({modal:true})
	}
	backDropHandler=()=>{
		this.setState({modal:false})
	}
	render(){
		return(
		<Aux>
		<Element name='Footer'>
		<MapDisplay show={this.state.modal} backDropHandler={this.backDropHandler} >
		</MapDisplay>
		<div className={css.Footer}>
			<div className={css.Top}><a onClick={this.props.scrollToTop}>Back to Top</a></div>
			<div className={css.Bottom}>
				<div className={css.Div1}>
						<strong> Contact Us </strong><br/><br/>
						 <i className="fa fa-phone"></i>	01-4264123 / 9818445068 <br/>
						 <i className="fa fa-map-marker"></i> Paknajol , Kathmandu<br/>
						 <i className="fa fa-envelope"></i> booksnepal67@gmail.com
						
				</div>
				<div className={css.Div2}>
					<div className={css.Middle}><strong>Make Money with us</strong></div>
					
					<div className={css.Mitems}>Sell on booksnepal.com</div>
					<div className={css.Mitems}>Sell your services</div>
					<div className={css.Mitems}>Become an affiliate</div>
					<div className={css.Mitems}>Advertise your products</div>
					<div className={css.Mitems}>Expand your business</div>

				</div>
				<div className={css.Div3} onClick={this.modalHandler}>
					
					<div><strong>Location</strong></div>
					<div className={css.LocationImage}></div>
				</div>
			</div>
			<div className={css.Copyright}>&#169; CopyRight @ 2019</div>
		</div>
		</Element>
		</Aux>
		);
	}
}
export default Footer