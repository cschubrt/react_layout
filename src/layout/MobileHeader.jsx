import React, { useState } from 'react';
import Header from './Header';

export default function MobileHeader() {
    const [styled, setStyled] = useState('none');

    // open/close side menu. default hide
    // (max-width: 992px) and (min-width: 601px)
    const handleOpen = () => {
        if (styled == 'block') {
            setStyled("none");
        } else {
            setStyled("block");
        }
    }

    // close the side menu with the close button
    const handleClose = () => {
        setStyled("none");
    }

    return (
        <>
            <Header handleClick={handleOpen} />
            <nav className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"
                style={{ display: `${styled}` }} id="mySidebar">
                <a href="#!" onClick={handleClose} className="w3-bar-item w3-button w3-large">Close</a>
                <a href="#about" onClick={handleClose} className="w3-bar-item w3-button">About</a>
                <a href="#team" onClick={handleClose} className="w3-bar-item w3-button">Team</a>
                <a href="#work" onClick={handleClose} className="w3-bar-item w3-button">Work</a>
                <a href="#pricing" onClick={handleClose} className="w3-bar-item w3-button">Pricing</a>
                <a href="#contact" onClick={handleClose} className="w3-bar-item w3-button">Contact</a>
            </nav>
        </>
    );
}