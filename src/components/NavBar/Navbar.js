import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'gatsby';
import logo from '../../images/profile2.jpg';

import "../../style/style.css";

export default class Navbar extends Component {
    
    state={
        navbarState:false,
        navbarClass: "collapse navbar-collapse",
        menus: [{
            id:1,
            text: "Home",
            url: '/',
        }, {
            id:2,
            text: "About",
            url: '/about',
        }, {
            id:3,
            text: "Projects",
            url: '/projects',
        }]
    }

    myToggler = () => {
        this.state.navbarState ? this.setState({
            navbarState: false,
            navbarClass: "collapse navbar-collapse"
        }) : this.setState({
            navbarState: true,
            navbarClass: "collapse navbar-collapse show"
        })
    }
    
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-theme text-white">
                <Link to="/" className="navbar-brand ml-5">
                    {/* <img src={logo} alt="logo goes here" width="40px"/> */}
                    <h3 className="text-dark font-weight-bold">DK</h3>
                </Link>
                <button className="navbar-toggler text-uppercase font-weight-bold rounded text-dark" type="button" onClick={this.myToggler}>
                    <span>
                        Menu 
                        <i className="fa fa-bars"></i>
                    </span>
                </button>


                <div className={this.state.navbarClass}>
                    <ul className="navbar-nav ml-auto mr-5">
                        {this.state.menus.map(menu => {
                            return (
                                <li key={menu.id} className="nav-item">
                                    <Link to={menu.url} className="nav-link text-dark font-weight-bold">
                                        {menu.text}
                                    </Link>
                                </li>
                            )
                        })}
                        
                        
                        <li className="nav-item">
                            <AnchorLink className="nav-link text-dark font-weight-bold" href="#footer">Contact</AnchorLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
