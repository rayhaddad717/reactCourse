import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import dogs from './Dogs'
class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid justify-content-end">
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className=" navbar-nav navbar-nav d-flex justify-content-center me-auto mb-2 mb-lg-0">
                            {dogs.map(dog => (<li className="nav-item text-center"><NavLink className="nav-link" activeClassName='active' to={`/dogs/${dog.name}`}>{dog.name}</NavLink></li>))}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    };
};

export default NavBar;