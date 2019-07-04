import React , { Component } from 'react';
import Cardlist from '../components/Cardlist'
// import {robots} from './robots';
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox';

class App extends Component {
        constructor() {
            super()
            this.state ={
                robots: [],
                searchfield: ' '
            }
        }

    componentDidMount() { 

        //FETCH API REQUEST
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data=>this.setState({robots: data}))
    
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        // console.log(filteredRobots);
    }

    render(){
            const {robots ,searchfield} = this.state;
            const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        //Ternary can be used :P this looks simpler 
        if(!robots.length){
            return <h1 className='heading tc'>Loading ...</h1>
        }

        else{
            return(
                <div>
                    <h2 className='heading tc'>SELECT ROBOT</h2> 
                    <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <Cardlist robots={filteredRobots}/>
                </Scroll>
                </div>
                
            );}
        
    }
}

export default App;