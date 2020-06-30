import React from 'react';
import "./navbar.css";
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { clearContacts } from '../../actions/contactActions';
import { logout } from '../../actions/authActions';

const MyNavbar = ({ myTitle, iconProp, clearContacts, logout, auth: { isAuthenticated, user} }) => {

    const handleLogout = () => {
        console.log('Inside handleLogout in navbar')
        logout();
        clearContacts();
    }

    const guestLinks = (
        <div className="d-flex justify-content-center justify-content-sm-end flex-fill"> 
            <Nav>
                <Link to="/register" className="nav-link">
                    Register
                </Link>
            </Nav>
            <Nav>
                <Link to="/login" className="nav-link">
                    Login
                </Link>
            </Nav>
            <Nav>
                <Link to="/about" className="nav-link">
                    About Us
                </Link>
            </Nav>
        </div>
    );

    const authLinks = (
        <div className="d-flex justify-content-center justify-content-sm-end flex-grow-1"> 
            <Navbar.Text className="pl-1">Hello</Navbar.Text>
            {user && <Navbar.Text className="pr-1">, {user && user.name}!</Navbar.Text>}
           
            <Nav>
                <Link to="/app" className="nav-link">
                    My Contacts
                </Link>
            </Nav>
            <Nav>
                <Link to="/about" className="nav-link">
                    About Us
                </Link>
            </Nav>
            <Nav>
                <Link to="#" onClick={handleLogout} className="nav-link">
                    Logout
                </Link>
            </Nav>
        </div>
    );

    return (
        <Navbar bg="dark" variant="dark" expand="sm" >
            <Link to="/">
                <Navbar.Brand>
                    <i className={iconProp}></i>   {myTitle}
                </Navbar.Brand>
            </Link>
            {isAuthenticated ? authLinks : guestLinks}
        </Navbar>
    )
}
MyNavbar.propTypes = {
    myTitle: PropTypes.string.isRequired,
    iconProp: PropTypes.string,
    logout: PropTypes.func.isRequired,
    clearContacts: PropTypes.func.isRequired,
    auth: PropTypes.object
};

MyNavbar.defaultProps = {
    myTitle: 'Contacts Manager',
    iconProp: 'far fa-address-book' // <i class="far fa-address-book"></i>
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { logout, clearContacts })(MyNavbar);
