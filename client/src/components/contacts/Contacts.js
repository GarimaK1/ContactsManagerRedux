import React, { Fragment, useEffect } from 'react';
import ContactItem from './ContactItem';
import MySpinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getContacts } from '../../actions/contactActions';

const Contacts = ({ getContacts, auth: { contacts, filtered, loading } }) => {

    useEffect(() => {
        getContacts();
        // eslint-disable-next-line
    }, [])

    if (!loading && contacts) {
        return (
            <Fragment>
                <h4 style={{ margin: '0.1rem 0.3rem' }}>My Contacts</h4>
                {(contacts.length === 0) && <h6 style={{ margin: '1.5rem 0.3rem' }}>
                    No contacts found. Please add a new contact.
            </h6>}
                {
                    filtered
                        ? filtered.map(contact => <ContactItem key={contact._id} contact={contact} />)
                        : contacts.map(contact => <ContactItem key={contact._id} contact={contact} />)
                }
            </Fragment>
        )
    } else {
        return(<MySpinner />)
    }
    
}

Contacts.propTypes = {
    getContacts: PropTypes.func.isRequired,
    auth: PropTypes.object
}

const mapStateToProps = state => {
    auth: state.auth
}

export default connect(mapStateToProps, { getContacts })(Contacts);