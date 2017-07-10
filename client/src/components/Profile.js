import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import setHeader from './shared/setHeader'
import { PlantTimer } from './gardin/PlantTimer'

class Profile extends Component {
    constructor(){
        super()
        this.state = {
            plants: []
        }

    //Hard bind clearStorage to this object    
    this.clearStorage = this.clearStorage.bind(this)
    }
    //Send Auth Token back to server
    componentWillMount(){

        const token = sessionStorage.getItem('Authorization')
    
        //Make fetch call with payload Object
        fetch('/api/profile', setHeader('GET', token))
        .then(response => response.json())
        .then(response => this.setState({plants: response.plants}))
        .catch(err => console.log(err))
    }

    clearStorage(){
        sessionStorage.removeItem('Authorization')
    }
    //Add conditional rendering for plants
    render(){

        return(
            <div>
                <Link to='/' onClick={this.clearStorage}>Logout</Link>
                <h1>Profile Page</h1>
                {this.state.plants.map((plant) => {
                    return <PlantTimer plant={plant.plantName} days={plant.daysTilWater} />
                })}
            </div>
            )
    }
}

export default Profile