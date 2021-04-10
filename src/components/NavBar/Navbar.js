import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'gatsby';
import logo from '../../images/profile2.jpg';

import "../../style/style.css";

export default class Navbar extends Component {
    
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-theme text-white">
                <Link to="/" className="navbar-brand ml-5">
                    <img src={logo} alt="logo goes here" width="40px"/>
                </Link>
                
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto mr-5">
                        
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-dark font-weight-bold">
                                    Home
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to="/about" className="nav-link text-dark font-weight-bold">
                                    About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/projects" className="nav-link text-dark font-weight-bold">
                                    Projects
                            </Link>
                        </li>

                        <li className="nav-item">
                            <AnchorLink className="nav-link text-dark font-weight-bold" href="#footer">Contact</AnchorLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
