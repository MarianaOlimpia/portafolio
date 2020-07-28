import React from 'react';
import Name from './Name';
import {Link} from 'react-scroll';

const Header = () => {
    return ( 
        <>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <Link className="navbar-brand Link" to="top"  smooth={true} duration={1000}>Inicio</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link Link" to="aboutme" smooth={true} duration={1000}>Acerca de mi<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link Link" to="projects" smooth={true} duration={1000}>Proyectos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link Link" to="contact" smooth={true} duration={1000}>Contacto</Link>
                    </li>
                    </ul>
                </div>
            </nav>
            <Name />
        </>
     );
}
 
export default Header;
