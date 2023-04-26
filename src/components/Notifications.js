import React from 'react';
import { Alert } from 'react-bootstrap';

const Notifications = ({ notifications }) => {
    return (
        <div>
            {notifications.map((notification) => (
                <Alert key={notification.id} variant={notification.type}>
                    {notification.message}
                </Alert>
            ))}
        </div>
    );
};

export default Notifications;
