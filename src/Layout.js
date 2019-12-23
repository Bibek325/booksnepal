import React,{Component} from 'react';
import Topnav from './containers/Topnav/Topnav'
import CsitSixth from './containers/EBooks/CsitSixth/CsitSixth'
import CompilerOldQuestion from './containers/EBooks/CsitSixth/CompilerOldQuestion/CompilerOldQuestion'
import RTSOldQuestion from './containers/EBooks/CsitSixth/RTSOldQuestion/RTSOldQuestion'
import NCCOldQuestion from './containers/EBooks/CsitSixth/NCCOldQuestion/NCCOldQuestion'
import SoftwareEngineeringOldQuestion from './containers/EBooks/CsitSixth/SoftwareEngineeringOldQuestion/SoftwareEngineeringOldQuestion'
import WebTechnologyOldQuestion from './containers/EBooks/CsitSixth/WebTechnologyOldQuestion/WebTechnologyOldQuestion'
import WebTechnologyNotes from './containers/EBooks/CsitSixth/WebTechnologyNotes/WebTechnologyNotes'
import Particles from 'react-particles-js';
import CsitFirst from './containers/EBooks/CsitFirst/CsitFirst'
import CsitSecond from './containers/EBooks/CsitSecond/CsitSecond'
import CsitThird from './containers/EBooks/CsitThird/CsitThird'
import CsitFourth from './containers/EBooks/CsitFourth/CsitFourth'
import CsitFifth from './containers/EBooks/CsitFifth/CsitFifth'
import CsitEighth from './containers/EBooks/CsitEighth/CsitEighth'
import CsitSeventh from './containers/EBooks/CsitSeventh/CsitSeventh'
import css from './App.css';

import CategoryItems from './containers/Categories/CategoryItems/CategoryItems'
import APIResult from './containers/APISearch/APIResult/APIResult'
import Advertisement from './components/Advertisement/Advertisement'
import AboutUs from './containers/AboutUs/AboutUs'
import FeedBackDisplay from './containers/SideMenu/FeedBackDisplay/FeedBackDisplay'
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
         
            
            <Route path='/Menu/feedback' exact component={FeedBackDisplay}/>
            <Route path='/Categories/:categories' exact component={CategoryItems}/>
            <Route path='/ebooks/CSITSixth/compiler-OldQuestion' component={CompilerOldQuestion}/>
            <Route path='/ebooks/CSITSixth/RTS-OldQuestion' component={RTSOldQuestion}/>
            <Route path='/ebooks/CSITSixth/WebTechnology-OldQuestion' component={WebTechnologyOldQuestion}/>
            <Route path='/ebooks/CSITSixth/WebTechnology-Notes' component={WebTechnologyNotes}/>
            <Route path='/ebooks/CSITSixth/NCC-OldQuestion' component={NCCOldQuestion}/>
            <Route path='/ebooks/CSITSixth/SoftwareEngineering-OldQuestion' component={SoftwareEngineeringOldQuestion}/>
          

      			<Route path='/API' component={APISearch}/>
            <Route path='/search/:search' exact component={Search}/>
            <Route path='/ebooks/CSITSixth' exact component={CsitSixth}/>
            <Route path='/ebooks/CSITSecond' exact component={CsitSecond}/>
            <Route path='/ebooks/CSITThird' exact component={CsitThird}/>
            <Route path='/ebooks/CSITFourth' exact component={CsitFourth}/>
            <Route path='/ebooks/CSITFifth' exact component={CsitFifth}/>
            <Route path='/ebooks/CSITSeventh' exact component={CsitSeventh}/>
            <Route path='/ebooks/CSITEighth' exact component={CsitEighth}/>
            <Route path='/ebooks/CSITFirst' exact component={CsitFirst}/>
            <Route path='/about-us' exact component={AboutUs}/>
            <Route path='/old-books' exact component={OldBooks}/>
            <Route path='/new-books' exact component={NewBooks}/>
            <Route path='/ebooks' exact component={EBooks}/>
            <Route path='/top' exact component={Home}/>
            <Route path='/' exact component={Home}/>
      			
      		</Switch>
          <Footer scrollToTop={this.scrollToTop}/>
          
         </div>
 	 	);
	}
}
export default App;
