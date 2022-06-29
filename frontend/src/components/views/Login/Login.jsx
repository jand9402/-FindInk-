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
    <div className="divLogin">
    <section className="Form mx-5">
        <div className="container containerLogin">
            <div className="row rowLogin no-gutters">
                <div className="col-lg-6 col-lg-5Img">
                    <img className="img-fluid" src={logo1} alt="logo"/>
                </div>
                <div className="col-lg-6 px-5 pt-5 col-lg-7form">
                    <h4 className="font-weight-bold py-3 iniciar_sesion">Iniciar sesión</h4>
                    <form>
                        <div className="form-row">
                            <div className="col-lg-7">
                                <input 
                                type="email" 
                                className="form-control my-3 p-3" 
                                placeholder="Correo" 
                                label='Username'
                                value={body.username}
                                onChange={inputChange}
                                name='username'
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-lg-7">
                                <input 
                                type="password" 
                                className="form-control my-3 p-3" 
                                placeholder="Contraseña" 
                                label='Password'
                                value={body.password}
                                onChange={inputChange}
                                name='password'
                            />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-lg-7">
                                <button type="button" className="btn1 mb-3" onClick={onSubmit}>Iniciar Sesión</button>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-lg-7">
                                <button type="button" className="btn1 mb-3" >Iniciar Sesión con Goolge</button>
                        <a className="olvido" href="#">¿Olvidaste la contraseña?</a>
                        <p className="crear_cuenta">¿No tienes una cuenta? <a href="#">Crear cuenta</a></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </div>
)
}

export default Login
