import axios from 'axios';
import {
    GET_CONTACTS,
    CLEAR_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_CURRENT,
    SET_CURRENT,
    UPDATE_CONTACT,
    CLEAR_FILTER,
    CONTACT_ERROR,
    CLEAR_ERRORS
} from './types';

// Clear errors (clear errors from state)
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}

// Get contacts for user
export const getContacts = () => async dispatch => {
    try {
        const resp = await axios.get('/api/contacts');
        // console.log(resp);
        dispatch({ 
            type: GET_CONTACTS, 
            payload: resp.data 
        });
    } catch (error) {
        // console.log(error);
        // console.log(error.response);
        // console.log(error.response.data.message);
        // console.log(error.response.data.errors[0].msg);
        // console.log(error.response.data.errors.length);
        console.log(error.response);
        if (error.response.data.errors) {
            dispatch({ type: CONTACT_ERROR, payload: error.response.data.errors[0].msg });
        } else if (error.response.data.message) {
            dispatch({ type: CONTACT_ERROR, payload: error.response.data.message });
        } else if (error.response.data) {
            dispatch({ type: CONTACT_ERROR, payload: error.response.data });
        } else if (error.response) {
            dispatch({ type: CONTACT_ERROR, payload: error.response });
        } else if (error) {
            dispatch({ type: CONTACT_ERROR, payload: error });
        }
    }
}

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

// Add contact
export const addContact = (contact) => async dispatch => {
    try {
        const resp = await axios.post('/api/contacts', contact, config);
        // console.log(resp);
        dispatch({ 
            type: ADD_CONTACT, 
            payload: resp.data.contact 
        });
    } catch (error) {
        if (error.response.data.errors) {
            dispatch({ type: CONTACT_ERROR, payload: error.response.data.errors[0].msg });
        } else if (error.response.data.message) {
            dispatch({ type: CONTACT_ERROR, payload: error.response.data.message });
        } else if (error.response.data) {
            dispatch({ type: CONTACT_ERROR, payload: error.response.data });
        } else if (error.response) {
            dispatch({ type: CONTACT_ERROR, payload: error.response });
        } else if (error) {
            dispatch({ type: CONTACT_ERROR, payload: error });
        }
    }
}

// Delete contact
export const deleteContact = (id) => async dispatch => {
    try {
        // const resp = await axios.delete('/api/contacts/' + `${id}`);
        await axios.delete(`/api/contacts/${id}`);
        dispatch({ 
            type: DELETE_CONTACT, 
            payload: id 
        });
    } catch (error) {
        console.log(error.response);
        if (error.response.data.errors) {
            dispatch({ type: CONTACT_ERROR, payload: error.response.data.errors[0].msg });
        } else if (error.response.data.message) {
            dispatch({ type: CONTACT_ERROR, payload: error.response.data.message });
        } else if (error.response.data) {
            dispatch({ type: CONTACT_ERROR, payload: error.response.data });
        } else if (error.response) {
            dispatch({ type: CONTACT_ERROR, payload: error.response });
        } else if (error) {
            dispatch({ type: CONTACT_ERROR, payload: error });
        }
    }
}

// Set current contact
export const setCurrent = (contact) => {
    return { 
        type: SET_CURRENT, 
        payload: contact 
    };
}

// Clear current contact
export const clearCurrent = () => {
    return { 
        type: CLEAR_CURRENT 
    };
}

// Update contact
export const updateContact = (contact) => async dispatch => {
    try {
        const resp = await axios.put(`/api/contacts/${contact._id}`, contact, config);
        // console.log(resp);
        dispatch({ 
            type: UPDATE_CONTACT, 
            payload: resp.data 
        });
    } catch (error) {
        if (error.response.data.errors) {
            dispatch({ type: CONTACT_ERROR, payload: error.response.data.errors[0].msg });
        } else if (error.response.data.message) {
            dispatch({ type: CONTACT_ERROR, payload: error.response.data.message });
        } else if (error.response.data) {
            dispatch({ type: CONTACT_ERROR, payload: error.response.data });
        } else if (error.response) {
            dispatch({ type: CONTACT_ERROR, payload: error.response });
        } else if (error) {
            dispatch({ type: CONTACT_ERROR, payload: error });
        }
    }
}


// Implicitly returning action object as using arroe functions for last three action-creators
// Filter contacts
export const filterContacts = (text) => ({ type: FILTER_CONTACTS, payload: text });  

// Clear Filter
export const clearFilter = () => ({ type: CLEAR_FILTER });

// Clear contacts
export const clearContacts = () => ({ type: CLEAR_CONTACTS });