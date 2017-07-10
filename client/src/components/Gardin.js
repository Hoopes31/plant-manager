import React from 'react'
import { PlantTimer } from './gardin/PlantTimer'

export const Gardin = (props) => {
    return (
        <div>
            {props.plants.map((plant) => {
                return <PlantTimer plant={plant.plantName} days={plant.daysTilWater} />
            })}
        </div>
    )
}