import React from 'react'
import CatTemperamentForm from './CatTemperamentForm'

const CatInfoSection = ({ catData }) => {
    const { name, description, temperament, image } = catData

    return (
        <div>
            <p><b>Name:</b> {name}</p>
            <p><b>Description:</b> {description}</p>
            <CatTemperamentForm temperament={temperament} />
            <img src={image.url} alt="cat" width="60%" height="auto" />
        </div>
    )
}

export default CatInfoSection