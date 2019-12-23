import React,{Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import css from './CategoryItems.css'
class Guides extends Component{
	render(){
		
		return(
				<div className={css.CategoryItems}>
					Page under Construction {this.props.match.params.categories}
					
				</div>
			)
	}
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyDY1Ri_Kj1pNQb7s_1CTwHNvBVV_lk-xPU")
})(Guides)