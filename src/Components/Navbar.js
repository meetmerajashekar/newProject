import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid p-5">
                    <a className="navbar-brand" href="#">
                        <img src="https://e-prathibha.com/img/logo.webp" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse fs-5 ps-5 ms-5" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active text-white">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link active text-white">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link active text-white">Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Navbar;