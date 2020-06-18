import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeAlert } from '../../actions/alertActions';

const Alerts = ({ removeAlert, alerts }) => {
    const [show, setShow] = useState(true);

    /* This works too (code to write dismissable alerts)-
    useEffect(() => {
        setShow(true);
    }, [show]);
    
    return (
        (alertContext.alerts.length > 0 && show) && alertContext.alerts.map(alert =>
            < Alert 
                key={alert.id} 
                variant={`${alert.type}`} 
                onClose={() => {removeAlert(alert.id); setShow(false);} } 
                dismissible 
            >
                {alert.msg}
            </ Alert>
        )
    )
    */

    const handleClose = (id) => {
        setShow(false);
        removeAlert(id); 
        setShow(true);
    }

    return (
        (alerts.length > 0 && show) && alerts.map(alert =>
            < Alert
                key={alert.id}
                variant={`${alert.type}`}
                onClose={() => handleClose(alert.id)}
                dismissible
            >
                {alert.msg}
            </ Alert>
        )
    ) 
}

Alerts.propTypes = {
    removeAlert: PropTypes.func.isRequired,
    alerts: PropTypes.array,
};

const mapStateToProps = state => {
    alerts: state.alert
}

export default connect(mapStateToProps, { removeAlert })(Alerts); 