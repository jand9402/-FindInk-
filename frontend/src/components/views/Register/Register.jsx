import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'
import { Container, Col, Row, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { useHistory } from 'react-router'

const Register = () => {
    const [body, setBody] = useState({ name: '', username: '', typeuser: '', gender: '', email: '', password: '', confirmpassword: '', terminos: '',  edad: '' })
    const { push } = useHistory()

    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })
    }

    const onSubmit = () => {
        console.log("ACA")
        console.log(body)
        axios.post('http://localhost:4000/api/register', body)
            .then(({ data }) => {
                console.log(data);
                push('/login')
            })
            .catch(({ response }) => {
                console.log(response)
            })
    }

    return (
        <div>
            <Form>
                <Container>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" value={body.name} onChange={inputChange} name='name' placeholder="Nombre" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Apodo</Form.Label>
                                <Form.Control type="text" value={body.username} onChange={inputChange} name='username' placeholder="Nombre" />
                            </Form.Group>
                            <Form.Label>Tipo usuario</Form.Label>
                            {['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Cliente"
                                    name="typeuser"
                                    value="1" onChange={inputChange}
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="Tatuador"
                                    name="typeuser"
                                    value="2" onChange={inputChange}
                                    type={type}
                                    id={`inline-${type}-2`}
                                />                    
                                </div>
                            ))}

                            <Form.Label>Género</Form.Label>
                            {['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Masculino"
                                    name="gender"
                                    value="1" onChange={inputChange}
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="Femenino"
                                    name="gender"
                                    value="2" onChange={inputChange}
                                    type={type}
                                    id={`inline-${type}-2`}
                                />                    
                                </div>
                            ))}

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" value={body.email} onChange={inputChange} name='email' placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            
                        </Col>

                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"value={body.password} onChange={inputChange} name='password' placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword2">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" value={body.confirmpassword} onChange={inputChange} name='confirmpassword' placeholder="Password" />
                            </Form.Group>  
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Label>Al registrarse estas aceptando los Términos y Condiciones y Politicas de Privacidad</Form.Label>
                            <Form.Check type="checkbox" onChange={inputChange} name='terminos' label="Check me out" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Label>Soy mayor de edad</Form.Label>
                            <Form.Check type="checkbox" onChange={inputChange} name='edad' label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" onClick={onSubmit}>
                            Registrarse
                        </Button>
                    </Row>
                </Container>
            </Form>
        </div>
    )
}

export default Register;