import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src="https://cdn.glitch.global/4f194de8-562e-4c7b-bc7c-babcb839caf7/Vector.png?v=1706507904041" alt="Logo" className="navbar-logo" />
                <div className="navbar-title">Taylor Swift</div>
            </div>
            <div className="navbar-menu">
                <a className="nav-item" href="/">Home</a>
                <a className="nav-item" href="/about">Merch</a>
            </div>
        </nav>
    );
};

export default Navbar;