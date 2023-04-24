import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">NewsApp</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            {/* <li className='nav-item'>
                                <div classname="dropdown">
                                    <Link classname="btn dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Authors
                                    </Link>

                                    <div classname="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <Link classname="dropdown-item" to="#">Thomas Ricke</Link>
                                        <Link classname="dropdown-item" to="#">Kris Hol</Link>
                                        <Link classname="dropdown-item" to="#">Igor Bonifaci</Link>
                                        <Link classname="dropdown-item" to="#">Mariella Moo</Link>
                                    </div>
                                </div>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/business">business</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/general">general</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">technology</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header
