import React from 'react'
import './Carta.css'
import Siman from '../assets/Siman.png'

const Carta = ({nombre,edad,foto,puesto}) => {
    return (
        <div className="carta">
            <img className="siman" src={Siman} height="75" alt="Siman"/>
            <img src={foto} alt={nombre} height="200" />
            <h1>Nombre: {nombre}</h1>
            <h2>Edad: {edad} años</h2>
            <h2>Puesto: {puesto}</h2>
        </div>
    )
}

export default Carta
