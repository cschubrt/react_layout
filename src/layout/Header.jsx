import React, { useState } from 'react';

export default function Header(props) {
    return (
        <>
            <div className="w3-top">
                <div style={{ backgroundColor: '#f8f8ff' }} className="w3-bar w3-card" id="myNavbar">
                    <a href="#home" className="w3-bar-item-logo my-icon bolder">CS</a>
                    <div className="w3-right w3-hide-small">
                        <a href="#about" className="w3-bar-item w3-button">About</a>
                        <a href="#team" className="w3-bar-item w3-button">Team</a>
                        <a href="#work" className="w3-bar-item w3-button">Work</a>
                        <a href="#pricing" className="w3-bar-item w3-button">Pricing</a>
                        <a href="#contact" className="w3-bar-item w3-button">Contact</a>
                    </div>
                    <a href="#!" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onClick={props.handleClick}>
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </div>
        </>
    );
}
