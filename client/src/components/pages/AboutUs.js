import React from 'react';
import Container from 'react-bootstrap/Container';

const hrStyle = {
    width: '65%'
}
const AboutUs = () => {
    const codeExample = '{ MongoDB, Express, React, Node }';
    return (
        <Container style={{ textAlign: 'center' }}>
            <h3>About Contacts Manager</h3>
            <p>It is a MERN* stack application where users can add/edit/delete contacts.</p>
            <p>Users can only view or modify their own contacts.</p>
            <p>Contacts Manager is fully responsive, using react-bootstrap for styling UI</p>
            <p>Global state is managed with redux, react-redux and redux-thunk</p>
            <p>User authentication and authorization using JSON Web Token and private routes</p>
            <hr style={hrStyle} />
            <p>*let {codeExample} = MERN;</p>
        </Container>
    )
}

export default AboutUs;