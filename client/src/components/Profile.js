import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import setHeader from './shared/setHeader'
import Gardin from './Gardin'

class Profile extends Component {
    constructor(){
        super()
        this.state = {
            plantData: ''
        }

    //Hard bind clearStorage to this object    
    this.clearStorage = this.clearStorage.bind(this)
    }
    //Send Auth Token back to server
    componentDidMount(){

        const token = sessionStorage.getItem('Authorization')
    
        //Make fetch call with payload Object
        fetch('/api/profile', setHeader('GET', token))
        .then(response => response.json())
        .then(response => this.displayPlants(response))
        .catch(err => console.log(err))
    }

    clearStorage(){
        sessionStorage.removeItem('Authorization')
    }

    displayPlants(data){
        if (data) {
            console.log(data)
            return console.log('Display plant data')
        }
        else {
            console.log('splash page')
        }
    }

    render(){
        return(
            <div>
                <Link to='/' onClick={this.clearStorage}>Logout</Link>
                <h1>Profile Page</h1>
                <ol>
                    <li>If no plants serve splash page on how to use</li>
                    <li>If plants serve plants</li>
                    <li>Add Nav bar, Settings, etc</li>
                </ol>
                <Gardin />
            </div>
            )
    }
}

export default Profile