import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const MediaUpload = ({ onMediaUpload }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedPerson, setSelectedPerson] = useState('');

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handlePersonSelect = (event) => {
        setSelectedPerson(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('person', selectedPerson);
        onMediaUpload(formData);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFile">
                <Form.Label>Choose a file to upload</Form.Label>
                <Form.Control type="file" onChange={handleFileSelect} />
            </Form.Group>
            <Form.Group controlId="formPerson">
                <Form.Label>Tag a person in the media</Form.Label>
                <Form.Control as="select" onChange={handlePersonSelect}>
                    <option value="">-- Select a person --</option>
                    {/* Here you would map over the list of people in the family tree and create an option element for each one */}
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Upload
            </Button>
        </Form>
    );
};

export default MediaUpload;
