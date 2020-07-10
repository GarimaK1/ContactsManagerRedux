import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div style={{ textAlign: 'center' }} >
            <h3>Welcome to Contacts Manager</h3>
            <ul style={{ listStylePosition: 'inside', padding: 0 }}>
                <li>
                    <Link to="/register">
                        Register
                    </Link>
                to create account and get started</li>
                <li>
                    <Link to="/login">
                        Login
                    </Link>
                to manage contacts</li>
            </ul>
        </div>
    )
}

export default Welcome;
