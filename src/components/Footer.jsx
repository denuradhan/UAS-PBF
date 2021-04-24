import React from 'react';
import {Navbar} from 'react-bootstrap'

export const Footer = props => {
    return (
            <div fixed="bottom">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        Deeny Nur Ramadhan@2021
                    </Navbar.Brand>
                </Navbar>
            </div>
    );
};
