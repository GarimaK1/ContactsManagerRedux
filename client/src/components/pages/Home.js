import React, { useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadUser } from '../../actions/authActions';

const Home = ({ loadUser }) => {

    useEffect(() => {
        console.log('useEffect in Home')
        // loadUser();
        // eslint-disable-next-line
    }, []);

    return (
        <Container fluid >
            <Row >
                <Col >
                    <ContactForm />
                </Col>
                <Col >
                    <ContactFilter />
                    <Contacts />
                </Col>
            </Row>
        </Container>
    )
}

Home.propTypes = {
    loadUser: PropTypes.func.isRequired
}

export default connect(null, { loadUser })(Home);