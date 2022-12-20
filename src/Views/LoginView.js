import React, { useState } from 'react'
import './LoginView.css'
import Siman from '../assets/Siman.png'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const LoginView = () => {
    const history = useHistory();
    const [usuario,setUsuario] = useState('')
    const [password,setPassword] = useState('')

    const login = () =>{
        axios.post('https://albul-figuras.herokuapp.com/janij/login',{
            name:usuario.trim(),
            password:password
        },{headers:{
            'Content-Type':'application/json',
        }}).then(res=>{
            if(res.data.message === "User not found"){
                alert('Usuario no encontrado')
            }
            else if(res.data.message === "Wrong password"){
                alert('Contraseña incorrecta')
            }
            else if(res.data.token){
                localStorage.setItem('token',res.data.token);
                localStorage.setItem('usuario',usuario);
                history.push('/yourcards')
            }
        }).catch(err=>console.log(err));
    }

    const handleUsuario = (e) =>{
        setUsuario(e.target.value);
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }

    
    return (
        <div style={{marginLeft:10}}>
            <button className='sendRegistrar' onClick={()=>{
                history.push('/register')
            }}>If you don't have an account register here</button>
            <h1>Login</h1>
            <input type='text' placeholder="User" onChange={handleUsuario}/>
            <br />
            <input type='password' placeholder="Password" onChange={handlePassword}/>
            <img src={Siman} className="Siman" alt="Siman HH"/>
            <br />
            <button onClick={()=>{
                login()
                }}>Login</button>
        </div>
    )
}

export default LoginView
