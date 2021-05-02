import {Button, Navbar, Nav, Form, FormControl} from 'react-bootstrap'
import React, { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import { Link } from 'react-router-dom'


export const Header = props => {
    const [searchValue, setSearchValue] = useState('')
    const [linkAPI, setLinkAPI] = useContext(MovieContext)
    const QUERY_API = `https://api.themoviedb.org/3/search/movie?api_key=1304eb73177f6db734ad08f218c547c0&language=en-US&query=${searchValue}`
    const WEEK_API = 'https://api.themoviedb.org/3/trending/movie/week?api_key=1304eb73177f6db734ad08f218c547c0'
    const DAY_API = 'https://api.themoviedb.org/3/trending/movie/day?api_key=1304eb73177f6db734ad08f218c547c0'

    const handleOnchange = (e) => {
        e.preventDefault()
        setSearchValue(e.target.value)
    }
    useEffect(() => {
        console.log(searchValue)
    }, [searchValue, linkAPI])

    return ( 
    <div>
            <Navbar bg="dark" variant="dark" fixed="top">
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
                    <Link to="/" onClick={() => {
                            setLinkAPI(WEEK_API)
                            console.log("weekly")
                        }}>
                        <Button variant="light" size="sm" style={{marginLeft:"10px", marginTop:"5px"}}>Weekly</Button>
                    </Link>
                    <Link to="/" onClick={() => {
                            setLinkAPI(DAY_API)
                            console.log("daily")
                        }}>
                        <Button variant="light" size="sm" style={{marginLeft:"10px", marginTop:"5px"}}>Daily</Button>
                    </Link>
                </Nav>
                <Form inline>
                <FormControl id="inputSearch" type="text" placeholder="Search" className="mr-sm-2" onChange={handleOnchange} />
                    <Link to="/" onClick={() => {
                            if(searchValue!==""){
                                setLinkAPI(QUERY_API)
                            }
                        }}>
                        <Button variant="outline-light" type="submit">Search</Button>
                    </Link>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};