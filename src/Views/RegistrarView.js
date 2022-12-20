import React, { useState } from 'react';
import './RegistrarView.css';
import Siman from '../assets/Siman.png'
import {useHistory} from 'react-router-dom'
import axios from 'axios';

const RegistrarView = () => {
    const [usuario,setUsuario] = useState('')
    const [password,setPassword] = useState('')

    const handleUsuario = (e) =>{
        setUsuario(e.target.value)
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }
    const registrar = () =>{ 
        axios.post('https://albul-figuras.herokuapp.com/janij/createJanij',{
            name:usuario.trim(),
            password:password
        }).then(res=>{
            if(res.data.message === "Ese nombre de usuario está en uso"){
                alert('El nombre de usuario ya está en uso')
            }
            else{
                axios.post('https://albul-figuras.herokuapp.com/janij/login',{
                    name:usuario,
                    password:password
                },{headers:{
                    'Content-Type':'application/json',
                }}).then(res=>{
                    if(res.data.token){
                        localStorage.setItem('token',res.data.token);
                        localStorage.setItem('usuario',usuario);
                        history.push('/yourcards')
                    }
                }).catch(err=>console.log(err))
            }
        }).catch(err=>console.log(err))
    }
    
    const history = useHistory();
    return (
        <div style={{marginLeft:10}}>
            <button className='sendRegistrar' onClick={()=>{
                history.push('/login')
            }}>If you already have an account log in here</button>
            <h1>Register</h1>
            <input type='text' placeholder="User" onChange={handleUsuario}/>
            <br />
            <input type='password' placeholder="Password" onChange={handlePassword}/>
            <img src={Siman} className="Siman" alt="Siman HH"/>
            <p>We recommend that the password has more than 13 characters.</p>
            <button onClick={()=>{
                registrar();
                }}>Register</button>
        </div>
    )
}

export default RegistrarView
