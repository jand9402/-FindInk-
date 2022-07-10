import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'
import { Container, Col, Row, Button, Form } from 'react-bootstrap';
import axios from 'axios'
import { useHistory } from 'react-router'
import "./Register.css"
import logo1 from "../../../assets/logo1.png"
import Swal from 'sweetalert2'

const Register = () => {
    const [errors, setErrors] = useState({});
    const [body, setBody] = useState({
        name: '',
        username: '',
        typeuser: '',
        gender: '',
        email: '',
        password: '',
        confirmpassword: '',
        terminos: '',
        edad: ''
    })

    function validate(body) {
        const expresiones = {
            nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
            password: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/, // tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.
            celular: /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/,
            correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        };
        const errors = {};
        if (!expresiones.nombre.test(body.name)) {
            errors.name =
                "Debe ingresar un nombre válido (no se permiten números ni símbolos)";
        } else if (!expresiones.correo.test(body.email)) {
            errors.email = "Debe ingresar un correo válido (nombre@proveedor.com)";
        }else if (!expresiones.password.test(body.password)) {
            errors.password =
                "8 y 16 caracteres, minimo un número, minimo una minúscula, minimo una mayúscula.";
        } else if (body.password !== body.confirmpassword) {
            errors.confirmpassword = "Las contraseñas deben ser iguales.";
        }else if (body.typeuser === '') {
            errors.typeuser = "Seleccione tipo de usuario.";
        }else if (body.gender === '') {
            errors.gender = "Seleccione genero.";
        }else if (body.terminos === '') {
            errors.terminos = "Debe Aceptar Terminos y Condiciones.";
        }else if (body.edad === '') {
            errors.edad = "Debe ser mayor de edad.";
        }
        return errors;
    }

    const { push } = useHistory()

    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })
        setErrors(
            validate({
                ...body,
                [name]: value
            })
          );
    }

    const onSubmit = () => {
        console.log(body)
        if (
            body.name === "" ||
            body.username === "" ||
            body.typeuser === "" ||
            body.gender === "" ||
            body.email === "" ||
            body.password === "" ||
            body.confirmpassword === "" ||
            body.terminos === "" ||
            body.edad === ""
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debe completar todos los campos!'
              })
        } else if (
            errors.name ||
            errors.typeuser ||
            errors.gender ||
            errors.email ||
            errors.password ||
            errors.confirmpassword ||
            errors.terminos ||
            errors.edad 
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debe completar todos los campos!'
              })
        } else {
            axios.post('http://localhost:4000/api/register', body)
                .then(({ data }) => {
                    console.log(data);
                    push('/login')
                })
                .catch(({ response }) => {
                    console.log(response)
                })
        }

    }

    

    return (
        <div>
            <div className='container container_register'>
                <div className='login-box register-box'>
                    <img className='img_login' src={logo1} alt="FindInk" />
                    <Form>
                        <Container>
                            <Row>
                                <Col className='col'>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="text"
                                            value={body.name}
                                            onChange={inputChange}
                                            name='name'
                                            placeholder="Nombre Completo" />
                                    </Form.Group>
                                    {errors.name && (
                                        <p className="errosRegistro">{errors.name}</p>
                                    )}
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="text"
                                            value={body.username}
                                            onChange={inputChange}
                                            name='username'
                                            placeholder="Nick Name" />
                                    </Form.Group>


                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control
                                            type="email"
                                            value={body.email}
                                            onChange={inputChange}
                                            name='email'
                                            placeholder="Correo Electronico" />
                                    </Form.Group>
                                    {errors.email && (
                    <p className="errosRegistro">{errors.email}</p>
                  )}
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control
                                            type="password"
                                            value={body.password}
                                            onChange={inputChange}
                                            name='password'
                                            placeholder="Contraseña" />
                                    </Form.Group>
                                    {errors.password && (
                    <p className="errosRegistro">{errors.password}</p>
                  )}
                                    <Form.Group className="mb-3" controlId="formBasicPassword2">
                                        <Form.Control
                                            type="password"
                                            value={body.confirmpassword}
                                            onChange={inputChange}
                                            name='confirmpassword'
                                            placeholder="Repetir Contraseña" />
                                    </Form.Group>
                                    {errors.confirmpassword && (
                    <p className="errosRegistro">{errors.confirmpassword}</p>
                  )}
                                    <label className='textfff'>Tipo de usuario</label>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                className='textfff'
                                                inline
                                                label="Cliente"
                                                name="typeuser"
                                                value="1" onChange={inputChange}
                                                type={type}
                                                id={`inline-${type}-1`}
                                            />
                                            <Form.Check
                                                className='textfff'
                                                inline
                                                label="Tatuador"
                                                name="typeuser"
                                                value="2" onChange={inputChange}
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                        </div>
                                    ))}
                                    {errors.typeuser && (
                    <p className="errosRegistro">{errors.typeuser}</p>
                  )}

                                    <label className='textfff'>Genero</label>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                className='textfff'
                                                inline
                                                label="Masculino"
                                                name="gender"
                                                value="1" onChange={inputChange}
                                                type={type}
                                                id={`inline-${type}-1`}
                                            />
                                            <Form.Check
                                                className='textfff'
                                                inline
                                                label="Femenino"
                                                name="gender"
                                                value="2" onChange={inputChange}
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                            <Form.Check
                                                className='textfff'
                                                inline
                                                label="No binario"
                                                name="gender"
                                                value="3" onChange={inputChange}
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                        </div>
                                    ))}
                                    {errors.gender && (
                    <p className="errosRegistro">{errors.gender}</p>
                  )}
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Label className='textfff'>Al registrarse estas aceptando los Términos y Condiciones y Politicas de Privacidad</Form.Label>
                                        <div className='d-flex'>
                                            <Form.Check type="checkbox" onChange={inputChange} name='terminos' /><p className='textfff aceptar'>Aceptar</p>
                                        </div>
                                        {errors.terminos && (
                    <p className="errosRegistro">{errors.terminos}</p>
                  )}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">

                                        <Form.Label className='textfff'>Soy mayor de edad</Form.Label>

                                        <div className='d-flex'>
                                            <Form.Check type="checkbox" onChange={inputChange} name='edad' /> <p className='textfff aceptar'>Aceptar</p>
                                        </div>
                                        {errors.edad && (
                    <p className="errosRegistro">{errors.edad}</p>
                  )}
                                    </Form.Group>

                                    <a className='iniciar_sesion' onClick={onSubmit}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Registrarse
                                    </a>
                                </Col>
                            </Row>

                        </Container>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Register;