import './CartaView.css';
import Carta from '../components/Carta'
import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import CartaNoConseguido from '../components/CartaNoEncontrado'

function CartaView() {
  const [madrijim, setMadrijim] = useState([]);
  const history = useHistory();

  if(!localStorage.getItem('token')){
    history.push('/login')
  }

  useEffect(()=>{
    axios.post(`https://albul-figuras.herokuapp.com/janij/getMadrijim`,{
      name:localStorage.getItem('usuario'),
      token:localStorage.getItem('token'),
    }).then(res=>setMadrijim(res.data)).catch(err => console.log(err))
  }
  )

  const renderCartas = madrijim.map(carta => {
    

    if(carta.conseguido){
      return <Carta nombre={carta.name} edad={carta.edad} foto={carta.foto} puesto={carta.puesto} key={carta.name} madrijim={madrijim}/>
    }
    else{
      
      return <CartaNoConseguido  key={carta.name} opcionesRandom={carta.opcionesRandom} nombre={carta.name} datoCurioso={carta.datoCurioso} tiempo={carta.tiempo}/>
      
    }
  }
  )

  return (
    <div className="App">

      <button className="cerrar" onClick={()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        history.push('/login')
      }}>Log Out</button>
      <h1 className="principal">Choose who said the fun fact to win the sticker of the group leader.</h1>
      <div className="lista">
        {renderCartas}
      </div>
    </div>
  );
}

export default CartaView;
