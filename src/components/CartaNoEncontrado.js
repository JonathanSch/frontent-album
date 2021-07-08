import React from 'react'
import './CartaNoEncontrado.css'
import axios from 'axios'


const CartaNoEncontrado = ({nombre,datoCurioso,opcionesRandom,tiempo}) => {

    const updateDate = () =>{
        axios.patch('https://albul-figuras.herokuapp.com/janij/UpdateTime/',{
            name:localStorage.getItem('usuario'),
            madrij:nombre,
            token:localStorage.getItem('token'),
        }).then(res=>console.log(res)).catch(err=>console.log(err))
    }
if(Date.now() > tiempo && (nombre.charAt(0) ==='U'||nombre.charAt(0)==='v'||nombre.charAt(0)==='V'||nombre.charAt(0)==='w'||nombre.charAt(0)==='W'||nombre.charAt(0)==='x'||nombre.charAt(0)==='X'||nombre.charAt(0)==='y' || nombre.charAt(0)==='Y'||nombre.charAt(0)=== 'z'||nombre.charAt(0)==='Z')){
        return (
            <div className="carta" onClick={()=>{
            }}>
               <h1>{datoCurioso}</h1>
               <button onClick={()=>{
                    axios.patch(`https://albul-figuras.herokuapp.com/janij/conseguir/`,{
                        name: localStorage.getItem('usuario'),
                        token:localStorage.getItem('token'),
                        madrij: nombre
                    })
                }}>{nombre}</button>    
                <button onClick={()=>updateDate()}>{opcionesRandom[0]}</button>
                
                <button onClick={()=>updateDate()}>{opcionesRandom[1]}</button>
                <button onClick={()=>updateDate()}>{opcionesRandom[2]}</button>
            </div>
        )
    }
else if(Date.now() > tiempo && (nombre.charAt(0) ==='a' ||nombre.charAt(0)=== 'A'||nombre.charAt(0)=== 'b'||nombre.charAt(0)==='B'||nombre.charAt(0)==='c'||nombre.charAt(0)==='C'||nombre.charAt(0)==='d'||nombre.charAt(0)==='D'||nombre.charAt(0)==='e'||nombre.charAt(0)==='E'||nombre.charAt(0)==='f'||nombre.charAt(0)==='F'||nombre.charAt(0)==='r'||nombre.charAt(0)==='R'||nombre.charAt(0)==='s'||nombre.charAt(0)==='S'||nombre.charAt(0)==='t'||nombre.charAt(0)==='T')){
    return (
        <div className="carta" onClick={()=>{
        }}>   
            <h1>{datoCurioso}</h1>
            <button onClick={()=>updateDate()}>{opcionesRandom[0]}</button>
            <button onClick={()=>{
                axios.patch(`https://albul-figuras.herokuapp.com/janij/conseguir/`,{
                    name: localStorage.getItem('usuario'),
                    token:localStorage.getItem('token'),
                    madrij: nombre
                })
            }}>{nombre}</button>
            <button onClick={()=>updateDate()}>{opcionesRandom[1]}</button>
            <button onClick={()=>updateDate()}>{opcionesRandom[2]}</button>
        </div>
    )
}
else if((Date.now() > tiempo) && (nombre.charAt(0) ==='g' ||nombre.charAt(0)=== 'G'||nombre.charAt(0)=== 'h'||nombre.charAt(0)==='H'||nombre.charAt(0)==='i'||nombre.charAt(0)==='I'||nombre.charAt(0)==='j'||nombre.charAt(0)==='J'||nombre.charAt(0)==='k'||nombre.charAt(0)==='K'||nombre.charAt(0)==='l'||nombre.charAt(0)==='L')){
    return(
        <div className="carta" onClick={()=>{
        }}>
       
            <h1>{datoCurioso}</h1>
            <button onClick={()=>updateDate()}>{opcionesRandom[0]}</button>
            <button onClick={()=>updateDate()}>{opcionesRandom[1]}</button>
            <button onClick={()=>{
                axios.patch(`https://albul-figuras.herokuapp.com/janij/conseguir/`,{
                    name: localStorage.getItem('usuario'),
                    token:localStorage.getItem('token'),
                    madrij: nombre
                })
            }}>{nombre}</button>
            <button onClick={()=>updateDate()}>{opcionesRandom[2]}</button>
        </div>
    )
}
else if((Date.now() > tiempo) && (nombre.charAt(0) ==='s' || nombre.charAt(0)==='S'||nombre.charAt(0)=== 't'||nombre.charAt(0)==='T'||nombre.charAt(0)==='u'||nombre.charAt(0)==='U'||nombre.charAt(0)==='m'||nombre.charAt(0)==='M'||nombre.charAt(0)==='n'||nombre.charAt(0)==='N'||nombre.charAt(0)==='o'||nombre.charAt(0)==='O'||nombre.charAt(0)==='p'||nombre.charAt(0)==='P'||nombre.charAt(0)==='q'||nombre.charAt(0)==='Q')){
    return(
        <div className="carta" onClick={()=>{
        }}>
            <h1>{datoCurioso}</h1>
            <button onClick={()=>updateDate()}>{opcionesRandom[0]}</button>
            <button onClick={()=>updateDate()}>{opcionesRandom[1]}</button>
            <button onClick={()=>updateDate()}>{opcionesRandom[2]}</button>
            <button onClick={()=>{
                axios.patch(`https://albul-figuras.herokuapp.com/janij/conseguir/`,{
                    name: localStorage.getItem('usuario'),
                    token:localStorage.getItem('token'),
                    madrij: nombre
                })
            }}>{nombre}</button>
        </div>
    )
}
else{
    return (
        <>
        <div className="cartaNoEncontrado">
            <h1>Tienes que esperar {parseInt((tiempo - Date.now())/60000)} minutos y unos pocos segundos para volver a intentar</h1>
        </div>
        </>
    )
}
        
}

export default CartaNoEncontrado
