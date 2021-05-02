import React from 'react';
import {Navbar} from 'react-bootstrap'

export const Footer = props => {
    return (
            <div>
                <Navbar bg="dark" variant="dark" fixed="bottom">
                    <Navbar.Brand href="#home">
                        Deeny Nur Ramadhan@2021
                    </Navbar.Brand>
                </Navbar>
            </div>
    );
};