//This is called Smart Component because they have "state", and smart components usually have class.
import React from 'react';
import CardList from '../Components/CardList.js';
import Searchbox from '../Components/Searchbox.js';
// import { robots } from './robots';
import './App.css'
import Scroll from '../Components/Scroll.js';
import ErrorBoundry from '../Components/ErrorBoundry.js';

//We want the children(CardList, SearchBox) to communicate with each other, so we use STATE, go read bottom

// const state = {
//     robots: robots,
//     searchfield: ''
// }

//In order to use state, We must change the App into object again
//So we use class App extends ... instead of const App ...
class App extends React.Component {
    constructor() {  //to add state, we have to use constructor
        super()
        this.state = {
            robotsState: [],
            searchfield: ''        
        }
    }

    onSearchChange = (event) => { //here we create a function named anything, now I want to link this function to SearchBox, so that everytime I do an event to SearchBox, it comes as parameter
        //console.log(event.target.value);  //It's just a known memorised way, we add .target.value to get the value of the event 
        //I want to update the value in searchfiled so 
        this.setState({ searchfield: event.target.value })
    } 

    //A ROLE, When using pre-built  functions like render and constructor, you don't need =>, BUT in our created function, we must use it to make sure that 'this' refers to the parent and not the event
    //So we changed it from onSearchChange (event) {} to what you see

    componentDidMount() { //Read about react lifecyle methods
        fetch('https://jsonplaceholder.typicode.com/users') //render runs after constructor and renders a [] so empty page, then runs again after this function to render from URL
            .then(Response=> {
                return Response.json();
            })
            .then(users => {
                this.setState({ robotsState: users })
            }) 
    }

    render() {
        const filteredRobots = this.state.robotsState.filter(robot => { //filter is just a method or a function I have just created with any name but I added inside of its () so it works
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) //This means "return the robot.name after you lowercase it that includes the inside of searchFiled after you lowercase it"
        })
        if (this.state.robotsState.length === 0) {
            return <h1 style={{textAlign: 'center'}}>Loading</h1>
        } else {
            return(
                <div className='tc'>
                    <h1 className='f1'>Robo Friends</h1>
                    <Searchbox searchChange={this.onSearchChange}/> {/* So here we link it, then we go to SearchBox.js */}
                    <Scroll>
                        <ErrorBoundry>
                            {/* <CardList robotsProps= {robots}/> Now CardList receives a props robots and it's an Array. so we added the {} . AND it receives it directly*/}
                            {/* <CardList robotsProps= {this.state.robotsState} /> {/* I want it to receive the robots from parent'state, not directly from file */}
                            <CardList robotsProps= {filteredRobots} /> {/* This now became children */}
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        }

    }
}
export default App;


//Props we can pass them down to children, 
//STATE an object that describes our application
//Props are simply things that come out of STATE
//So basically, a parent sends the STATE to a child, and the child receives them as Props
//State should live in the parent, so we added it to App