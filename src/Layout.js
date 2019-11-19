import React,{Component} from 'react';
import Topnav from './containers/Topnav/Topnav'
import CsitSixth from './containers/EBooks/CsitSixth/CsitSixth'
import Particles from 'react-particles-js';
import CsitFirst from './containers/EBooks/CsitFirst/CsitFirst'
import css from './App.css';
import CategoryItems from './containers/Categories/CategoryItems/CategoryItems'
import APIResult from './containers/APISearch/APIResult/APIResult'
import Advertisement from './components/Advertisement/Advertisement'
import AboutUs from './containers/AboutUs/AboutUs'
import Footer from './containers/Footer/Footer'
import OldBooks from './containers/OldBooks/OldBooks'
import NewBooks from './containers/NewBooks/NewBooks'
import EBooks from './containers/EBooks/EBooks'
import Home from './containers/Home/Home'
import APISearch from './containers/APISearch/APISearch'
import {Route,Switch} from 'react-router-dom'
import Search from './containers/Search/Search'
import SideMan from './assets/SideMan.jpg'
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
class App extends Component{
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
  scrollToTop() {
        scroll.scrollToTop();
      }
    scrollToBottom() {
      scroll.scrollToBottom();
    }
	   scrollTo(name) {
    scroller.scrollTo(name, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }


  render(){
    var d= new Date();
    let Hour=d.getHours();
    let Minutes=d.getMinutes();
    let Dates=d.getDay();
    let Month=d.getMonth();
    
  	return(
    	<div className={css.App}>
      		<Topnav/>
         
          
          <div className={css.SideDesign}>{Hour}:{Minutes}<br/>{Month}/{Dates}</div> 
      		
          <Switch>
            <Route path='/Categories/:categories' exact component={CategoryItems}/>
            <Route path='/API/:api' exact component={APISearch}/>
      			<Route path='/API' exact component={APISearch}/>
            <Route path='/search/:search' exact component={Search}/>
            <Route path='/e-books/CSITSixth' exact component={CsitSixth}/>
            <Route path='/e-books/CSITFirst' exact component={CsitFirst}/>
            <Route path='/about-us' exact component={AboutUs}/>
            <Route path='/old-books' exact component={OldBooks}/>
            <Route path='/new-books' exact component={NewBooks}/>
            <Route path='/e-books' exact component={EBooks}/>
            <Route path='/top' exact component={Home}/>
            <Route path='/' exact component={Home}/>
      			
      		</Switch>
          <Footer scrollToTop={this.scrollToTop}/>
          
         </div>
 	 	);
	}
}
export default App;
