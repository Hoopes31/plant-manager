import React from 'react'
import { render } from 'react-dom'
import { PlantTimer } from './gardin/PlantTimer'
import { AddPlant } from './gardin/AddPlant.js'
import { AddPlantInputForm } from './gardin/AddPlantInputForm.js'
import { Link } from 'react-router-dom'

class Gardin extends React.Component {
  render(){
    return(
      <div>
      <br/>
<br/>
<br/>
        <AddPlantInputForm />
      </div>
    )
  }
}

export default Gardin