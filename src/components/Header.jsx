import {Button, Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap'

import React, { useContext, useEffect, useState } from 'react';
import { MovieContext,setQuery, query } from '../contexts/MovieContext';

export const Header = props => {
    const [searchValue, setSearchValue] = useState('')

    const { query, setQuery } = useContext(MovieContext)

    const handleOnchange = (e) => {
        e.preventDefault()
        setSearchValue(e.target.value)
    }

    useEffect(() => {
        console.log(searchValue)
    }, [searchValue])

    return ( 
    <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#Weekly">Weekly</Nav.Link>
                <Nav.Link href="#Daily">Daily</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl id="inputSearch" type="text" placeholder="Search" className="mr-sm-2" onChange={handleOnchange} />
                <Button variant="outline-success" onClick={() => {
                    setQuery(searchValue)
                    console.log(query)
                }}>Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

