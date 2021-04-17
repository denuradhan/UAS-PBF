import {Button, Navbar, Nav, Form, FormControl} from 'react-bootstrap'
import React, { useContext, useEffect, useState } from 'react';
import { MovieContext} from '../contexts/MovieContext';

export const Header = props => {
    const [searchValue, setSearchValue] = useState('')

    const [query, setQuery] = useContext(MovieContext)

    const handleOnchange = (e) => {
        e.preventDefault()
        setSearchValue(e.target.value)
    }

    useEffect(() => {
        console.log(searchValue)
    }, [searchValue])

    return ( 
    <div>
            <Navbar  bg="dark" variant="dark">
            <Navbar.Brand href="https://www.themoviedb.org/" target="_blank">
                <img
                    src="/blue_square_TMDBLOGO.svg"
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Navbar.Brand>
                        THE MOVIE DATABASE
                    </Navbar.Brand>
                </Nav>
                <Form inline>
                <FormControl id="inputSearch" type="text" placeholder="Search" className="mr-sm-2" onChange={handleOnchange} />
                <Button variant="outline-success" onClick={() => {
                    if(searchValue!=""){
                        setQuery(searchValue)
                        console.log(query)
                    }
                }}>Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};