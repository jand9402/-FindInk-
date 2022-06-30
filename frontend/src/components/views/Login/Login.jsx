import React, { useState } from 'react'
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import fondo from './fondo.jpg'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import logo1 from "../../../assets/logo1.png"
import "./Login.css"



const Login = () => {

    const [body, setBody] = useState({ username: '', password: '' })
    const { push } = useHistory()

    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })
    }

    const onSubmit = () => {
        console.log(body)
        let username = {"username" : body.username};
        axios.post('http://localhost:4000/api/0.0.1/users/login', body)
            .then(({ data }) => {
                console.log(data);
                localStorage.setItem('User', JSON.stringify(data));
                localStorage.setItem('auth', JSON.stringify("yes"));
                push('/app');
            })
            .catch(({ response }) => {
                console.log(response.data)
            })
    }

return(
    <>
    <div className='container container_login'>
        <div className='login-box'>
            <img className='img_login' src={logo1} alt="FindInk"/>
            <form>
                <div className='user-box'>
                    <input 
                    type="email"
                    label='Username'
                    value={body.username}
                    onChange={inputChange}
                    name='username'/>
                        <label>Correo</label>
                </div>
                <div className='user-box'>
                <input type="password" 
                    label='Password'
                    value={body.password}
                    onChange={inputChange}
                    name='password'/>
                        <label>Contraseña</label>
                </div>
                <a className='iniciar_sesion'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Iniciar Sesión
                </a>
                <a className='iniciar_sesion'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Iniciar con Google
                </a>
                <div className='links_login'>
                <a className="olvido" href="#">¿Olvidaste la contraseña?</a>
                <p className="crear_cuenta">¿No tienes una cuenta? <a className="olvido" href="#">Crear cuenta</a></p>
                </div>
                            
            </form>
        </div>
    </div>
    </>
)
}

export default Login
