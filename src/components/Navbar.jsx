import React from 'react';

const Navbar = () => {
    // ... other states and functions

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="https://cdn.glitch.global/4f194de8-562e-4c7b-bc7c-babcb839caf7/Vector.png?v=1706507904041" alt="Logo" />
            </div>
            <div className="navbar-menu">
                <a className="nav-item" href="/home">Home</a>
                <a className="nav-item" href="/merch">Merch</a>
            </div>
            <div className="navbar-title">
                Taylor Swift
            </div>
        </nav>
    );
};

export default Navbar;