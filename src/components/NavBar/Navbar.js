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
            url: '#hero',
        }, {
            id:2,
            text: "About",
            url: '#about',
        }, {
            id:3,
            text: "Certificates",
            url: '#certificates',
        },{
            id:4,
            text: "Projects",
            url: '#projects',
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
            <nav className="navbar fixed-top navbar-expand-sm bg-dark text-white">
                <AnchorLink href="#hero" className="navbar-brand ml-5">
                    {/* <img src={logo} alt="logo goes here" width="40px"/> */}
                    <h1 className="text-white font-weight-bold">DK</h1>
                </AnchorLink>
                <button className="navbar-toggler text-uppercase font-weight-bold rounded text-white" type="button" onClick={this.myToggler}>
                    <h2>
                        <i className="fa fa-bars"></i>
                    </h2>
                </button>


                <div className={this.state.navbarClass}>
                    <ul className="navbar-nav ml-auto mr-5 p-2">
                        {this.state.menus.map(menu => {
                            return (
                                <li key={menu.id} className="nav-item px-3">
                                    <AnchorLink className="nav-link text-white font-weight-bold" href={menu.url}>{menu.text}</AnchorLink>
                                </li>
                            )
                        })}
                        
                        
                        <li className="nav-item">
                            <AnchorLink className="nav-link text-white font-weight-bold" href="#footer">Contact</AnchorLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
