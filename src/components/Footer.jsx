import React from 'react';
import {Navbar} from 'react-bootstrap'

export const Footer = props => {
    return (
            <div>
                <Navbar bg="dark" variant="dark" fixed="bottom">
                    <Navbar.Brand href="#home" style = {{fontSize : '0.8rem' }}>
                        Denny Nur Ramadhan@2021
                    </Navbar.Brand>
                </Navbar>
            </div>
    );
};