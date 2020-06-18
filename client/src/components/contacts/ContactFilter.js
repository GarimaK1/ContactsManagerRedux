import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterContacts, clearFilter } from '../../actions/contactActions';

const ContactFilter = ({ filterContacts, clearFilter }) => {
    const filterText = useRef('');

    const handleChange = (e) => {
        // console.log(filterText.current.value);
        // console.log(e.target.value);
        if (filterText.current.value) {
            filterContacts(e.target.value);
        } else {
            clearFilter();
        }
    }

    return (
        <Form style={{ margin: '0.3rem'}}>
            <Form.Group>
                <Form.Control 
                    type="text" 
                    placeholder="Filter contacts..." 
                    name="text" 
                    ref={filterText} 
                    onChange={handleChange}
                />
            </Form.Group>
        </Form>
    )
}

ContactFilter.propTypes = {
    filterContacts: PropTypes.func.isRequired,
    clearFilter: PropTypes.func.isRequired,
}

export default connect(null, { filterContacts, clearFilter })(ContactFilter);