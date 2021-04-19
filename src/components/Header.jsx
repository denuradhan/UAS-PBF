import {Button, Navbar, Nav, Form, FormControl} from 'react-bootstrap'
import React, { useContext, useEffect, useState } from 'react';
import { MovieContext} from '../contexts/MovieContext';

export const Header = props => {
    const [searchValue, setSearchValue] = useState('')
    const [linkAPI, setLinkAPI] = useContext(MovieContext)
    const QUERY_API = `https://api.themoviedb.org/3/search/movie?api_key=1304eb73177f6db734ad08f218c547c0&language=en-US&query=${searchValue}`
    const WEEK_API = 'https://api.themoviedb.org/3/trending/all/week?api_key=1304eb73177f6db734ad08f218c547c0'
    const DAY_API = 'https://api.themoviedb.org/3/trending/all/day?api_key=1304eb73177f6db734ad08f218c547c0'

    const handleOnchange = (e) => {
        e.preventDefault()
        setSearchValue(e.target.value)
    }

    useEffect(() => {
        console.log(searchValue)
    }, [searchValue, linkAPI])

    return ( 
    <div>
            <Navbar  bg="dark" variant="dark" fixed="top">
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
                    <Nav.Link href="#weekly" onClick={() => {
                        setLinkAPI(WEEK_API)
                    }}>Weekly</Nav.Link>
                    <Nav.Link href="#daily" onClick={() => {
                        setLinkAPI(DAY_API)
                    }}>Daily</Nav.Link>

                </Nav>
                <Form inline>
                <FormControl id="inputSearch" type="text" placeholder="Search" className="mr-sm-2" onChange={handleOnchange} />
                <Button variant="outline-success" href="#search" onClick={() => {
                    if(searchValue!==""){
                        setLinkAPI(QUERY_API)
                    }
                }}>Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};