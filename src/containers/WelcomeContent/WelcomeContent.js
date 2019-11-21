import React,{Component} from 'react'
import css from './WelcomeContent.css'
import Particles from 'react-particles-js';
import {Link} from 'react-router-dom'
import FeedBackDisplay from '../../components/UI/FeedBackDisplay/FeedBackDisplay'
import image from '../../assets/hero.png'
import eye from '../../assets/eye.gif'

import FeedBack from './FeedBack/FeedBack'
import feedback from '../../assets/feedback.png'
import * as Scroll from 'react-scroll'
import {  Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
class WelcomeContent extends Component{
	state={
		modal:false
	}
	modalHandler=()=>{
		this.setState({modal:true})
	}
	backDropHandler=()=>{
		this.setState({modal:false})
	}
	componentDidMount(){
      Events.scrollEvent.register('begin', function(to, element) {
     });
      Events.scrollEvent.register('end', function(to, element) {
     });
 
    scrollSpy.update();
 
      }
    componentWillUnmount() {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      }
    
    
    scrollTo() {
    scroller.scrollTo('Trendings', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
	render(){
		

		return(

			<div className={css.Welcome}>

			<FeedBackDisplay show={this.state.modal} backDropHandler={this.backDropHandler} bookinfo={this.props.bookinfo}><FeedBack backDropHandler={this.backDropHandler}/></FeedBackDisplay>
			<div className={css.welcomeContent}>
				<Particles  className={css.Particles}
    params={{

	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        },
	        "move":{
    		"speed":3
    		},
    		"opacity":{
    			"value":.5
    		}

	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode":"grab"
	            },

	        },
	        "modes":{
	            	"grab":{
	            		"line_linked":{
	            			"opacity":1.5,
	            			"distance":40
	            		}
	            	}
	            }
	    }
	}} />
				<div onClick={this.modalHandler} className={css.Feedback}><img className={css.FeedBackLogo} src={feedback}/></div>
				<div  className={css.content}>

				 <div className={css.Circle1}></div> 
          <div className={css.Circle2}></div> 
          <div className={css.Circle3}></div> 
          <div className={css.Circle4}></div> 
          <div className={css.Div1}></div> 
          <div className={css.Div2}></div> 
          <div className={css.Div3}></div> 
          <div className={css.Div4}></div>
          <div className={css.Eye1}><img className={css.EyeImg} src={eye}/></div>
          <div className={css.Eye2}><img className={css.EyeImg} src={eye}/></div>

					<p className={css.head}>Welcome to booksnepal.com</p>
						<p className={css.body}>where you get all kinds of reading materials available on a single website.The platform on which you can then do various activity like buy,sell,share,donate,publish,explore and many more. Do support us for creating an empire of the bookstore</p>
						<div className={css.contentList}>
						<div className={css.list}>
							<Link className={css.List} to='/e-books'><div> e-books</div></Link>
							<Link className={css.List} to='/new-books'><div> books</div></Link>
							<Link className={css.List} to='/old-books'><div> used books</div></Link>
						</div>
						</div>
						

				</div>
				<div></div>
				
				<div className={css.KtaImage}><img className={css.KtaImg} src={image}/></div>
			
			</div>
			<div>
						
							<a onClick={this.scrollTo}><div className={css.button} on>
								Let's Explore
							</div>	</a>
						</div>

			
			</div>
			)
	}
}
export default WelcomeContent