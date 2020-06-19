import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearErrors, login} from '../../actions/authActions';
import { setAlert } from '../../actions/alertActions';

const Login = ({ setAlert, login, clearErrors, auth: { isAuthenticated, error } }) => {

    let history = useHistory();

    useEffect(() => {
        console.log('useEffect in Login')
        if (isAuthenticated) {
            // if user is already authenticted, don't show login. Redirect to Home page '/'.
            console.log('isAuth: true. Redirecting to Home')
            history.push('/app');
        }
        if (error === 'Invalid credentials!') {
            setAlert(error, 'danger');
            clearErrors();
        } else if (error) {
            setAlert(error, 'danger');
            clearErrors();
        }
        // because we don't want to add clearErrors, setAlert as dependencies.
        // eslint-disable-next-line 
    }, [error, isAuthenticated, history]);

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

    const handleChange = (evt) => {
        setUser({ ...user, [evt.target.name]: evt.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setAlert('Please enter all fields', 'danger');
        } else {
            login({ 
                email, 
                password 
            });
        }
    }

    return (
        <Container >
            <Row>
                <Col sm={10} md={6} xl={4} style={{ margin: 'auto' }}>
                    <h3 style={{ textAlign: 'center' }}>Login User</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Control 
                                type="email" 
                                placeholder="Email" 
                                name='email' 
                                value={email} 
                                onChange={handleChange} 
                                required 
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name='password'
                                value={password}
                                onChange={handleChange}
                                required
                                minLength="4"
                            />
                        </Form.Group>
                        <Button variant="dark" type="submit" block>
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    auth: PropTypes.object,
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { clearErrors, login, setAlert })(Login);