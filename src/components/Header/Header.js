import React from 'react';

const Header = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bolder fs-2" href="#/">KOPAL Site</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#/">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/">Tricks</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/">Account</a>
                            </li>
                        </ul>
                        <span className="navbar-text fw-bolder">
                            This website can be lucky for you.
                        </span>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;