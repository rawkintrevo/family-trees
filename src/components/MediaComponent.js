import React from 'react';
import { Card } from 'react-bootstrap';


const MediaComponent = (props) => {
    const { mediaUrl, personName } = props;

    return (
        <Card>
            <img
                width={64}
                height={64}
                className="mr-3"
                src={mediaUrl}
                alt={personName}
            />
            <Card.Body>
                <h5>{personName}</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                    pharetra varius quam sit amet vulputate. Quisque mauris augue,
                    molestie tincidunt condimentum vitae, gravida a libero.
                </p>
            </Card.Body>
        </Card>
    );
};

export default MediaComponent;
