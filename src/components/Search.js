import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

function Search(props) {
    const [searchText, setSearchText] = useState('');

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        props.onSearch(searchText);
    }

    return (
        <Form inline onSubmit={handleSearch}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchText} onChange={handleSearchTextChange} />
            <Button variant="outline-success" type="submit">Search</Button>
        </Form>
    );
}

export default Search;
