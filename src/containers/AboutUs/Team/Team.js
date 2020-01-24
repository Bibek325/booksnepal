import React,{Component} from 'react'
import TeamMember from '../../../components/TeamMember/TeamMember'
import css from './Team.css'
class Team extends Component{
	state={
		member:[
		{Name:'Bibek Lama',
		image:'https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-9/34106533_1549905331799446_2776855137509965824_n.jpg?_nc_cat=102&_nc_oc=AQlWLxdRtxffXJqNfEKLOLlMgHBXuNnTd4vq6bquiK-6twY5IThvvDqmAguiqVY5i2g&_nc_ht=scontent.fktm8-1.fna&oh=119d2fd206274ded2e4bc780edc2c37e&oe=5E28A7E3',
		 position:'Team Member'},
		 
		 {Name:'Sujan Shrestha',
		image:'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/77272603_2573539019367177_6964793240063049728_n.jpg?_nc_cat=111&_nc_oc=AQk5VmcJqgkXywYU0_6JRqhtmJrbZDPX-DmNK0QS5jM1ic9x4YFmCLddyYJraGxvxZs&_nc_ht=scontent.fktm3-1.fna&oh=fea783de428436f36f1d20e80528fec5&oe=5ED6A7FC',
		 position:'Team Member'},
		 {Name:'Saugat Neupane (Badda)',
		image:'https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-9/71652176_1669889086478902_3925152014606008320_n.jpg?_nc_cat=108&_nc_oc=AQl5H14yIavtcZKL0BCOwuGFpgueoLyuDHY0DmxeRPQ8nsTRFeoZGgTUx1RSdy-CzTA&_nc_ht=scontent.fktm8-1.fna&oh=74f64858a3ce6c7aa579bb3b61d9558d&oe=5E5C22A1',
		 position:'Team Member'},
		{Name:'Sachin Basnet',
		image:'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/74602121_2475627339342665_5769981557913681920_o.jpg?_nc_cat=106&_nc_oc=AQkNeIGl4vFeRIDT8fDOoqIUlk6jomZMmiLEVWa0XGeaAs_4QCbR2SZVd89xAvSXGh0&_nc_ht=scontent.fktm3-1.fna&oh=4b864134cabd0e1e54c219caed8a0688&oe=5ED3B0E0',
		 position:'Team Member'},
		 {Name:'Lokesh Bhusal',
		image:'https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-0/p206x206/58444826_2219664101487131_4084240811590418432_n.jpg?_nc_cat=102&_nc_oc=AQkorDg5uizn6IA5VdGO01jtxZwsRU13JRmoDUm8ftjHU2hynfvznTFqwSbFe78JaQk&_nc_ht=scontent.fktm8-1.fna&oh=c280910f958e23dec2d37d1d5b97a938&oe=5E59595E',
		 position:'Team Member'},
		]
	}
	render(){
		return(
		<div className={css.Team}>
			<div className={css.Header}>Team Member</div>
			<div className={css.Body}>
				{this.state.member.map((boy,key)=>(
					<TeamMember key={key} member={boy}/>))}
			</div>
		</div>
		);
	}
}
export default Team