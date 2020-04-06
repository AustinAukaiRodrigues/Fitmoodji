import React from 'react';
import './style.css'


function FemaleSignUp({ selected, onClick }) {

    return (
        selected ? <img alt="female avatar" className="femaleSignUp selected" src={'/images/clicked-female.png'} /> :
            <img onClick={() => onClick()} alt="female avatar" className="femaleSignUp" src={'/images/female.JPG'} />

    )
}

export default FemaleSignUp;
