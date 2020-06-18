import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearErrors, register } from '../../actions/authActions';
import { setAlert } from '../../actions/alertActions';

const Register = ({ setAlert, register, clearErrors, auth: { error, isAuthenticated} }) => {    

    let history = useHistory();
    
    useEffect(() => {
        if (isAuthenticated) {
            // if user is already authenticted, don't show register. Redirect to Home page '/'.
            history.push('/');
        }
        if (error === 'User already exists!') {
            setAlert(error, 'danger');
            clearErrors();
        } else if (error) {
            setAlert(error, 'danger');
            clearErrors();
        }
        // because we don't want to add clearErrors, setAlert as dependencies.
        // eslint-disable-next-line 
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = user;

    const handleChange = (evt) => {
        setUser({ ...user, [evt.target.name]: evt.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            setAlert('Please enter all fields', 'danger');
        } else 
        if (password !== password2) {
            setAlert('Password entries do not match', 'danger');
        } else {
            console.log('inside handlesubmit');
            register({
                name,
                email,
                password
            });
        }
    }

    return (
        <Container >
            <Row>
                <Col sm={10} md={6} xl={4} style={{ margin: 'auto'}}>
                    <h3 style={{ textAlign: 'center' }}>Register User</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            {/* <Form.Label>Enter Name:</Form.Label> */}
                            <Form.Control 
                                type="text" 
                                // size="sm" 
                                placeholder="Name" 
                                name="name" 
                                value={name} 
                                onChange={handleChange} 
                                required 
                            />
                        </Form.Group>
                        <Form.Group>
                            {/* <Form.Label>Enter Email:</Form.Label> */}
                            <Form.Control 
                                type="email" 
                                // size="sm" 
                                placeholder="Email" 
                                name='email' 
                                value={email} 
                                onChange={handleChange} 
                                required 
                            />
                        </Form.Group>
                        <Form.Group>
                            {/* <Form.Label>Enter Password:</Form.Label> */}
                            <Form.Control
                                // size="sm"
                                type="password"
                                placeholder="Password"
                                name='password'
                                value={password}
                                onChange={handleChange}
                                required
                                minLength="4"
                            />
                        </Form.Group>
                        <Form.Group>
                            {/* <Form.Label>Confirm Password:</Form.Label> */}
                            <Form.Control
                                // size="sm"
                                type="password"
                                placeholder="Confirm Password"
                                name='password2'
                                value={password2}
                                onChange={handleChange}
                                required
                                minLength="4"
                            />
                        </Form.Group>
                        <Button variant="dark" type="submit" block>
                            Register
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    auth: PropTypes.object,
}

const mapStateToProps = state => {
    auth: state.auth
}

export default connect(mapStateToProps, { setAlert, register, clearErrors })(Register);