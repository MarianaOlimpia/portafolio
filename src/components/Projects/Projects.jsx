import React from 'react';
import './Projects.scss';
import datalovers from '../../Assets/datalovers.PNG';
import socialnetwork from '../../Assets/socialnetwork.PNG';
import burgerqueen from '../../Assets/burgerqueen.PNG';
import reactIcon from '../../Assets/icon-react.png';
import materialIcon from '../../Assets/icon-materialui.png';
import antdesignIcon from '../../Assets/icon-antdesign.png';
import firebaseIcon from '../../Assets/icon-firebase.png';
import htmlIcon from '../../Assets/icon-html5.png';
import cssIcon from '../../Assets/icon-css3.png';
import jsIcon from '../../Assets/icon-js.png';

const Projects = () => {
    return ( 
        <div className='container mx-auto' id='projects'>
            <h1>Proyectos:</h1>

            <div className='row cards-container'>
                <div className="card card-project m-3 mx-auto">
                    <img src={datalovers} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Data Lovers</h5>
                        <p className="card-text">Interfaz web responsiva donde se puede consultar y manipular data por medio de filtros.</p>
                        <div>
                            <h6>1 semana</h6>
                            <img src={reactIcon} className="projects-icons" alt="..." />
                            <img src={materialIcon} className="projects-icons" alt="..." />
                        </div>
                        <a 
                            href="https://github.com/MarianaOlimpia/data-lovers-react" 
                            target='_blank' 
                            rel="noopener noreferrer" 
                            className="btn btn-primary"
                        >Repositorio</a>
                        <a 
                            href="https://marianaolimpia.github.io/data-lovers-react/" 
                            target='_blank' 
                            rel="noopener noreferrer" 
                            className="btn btn-primary">Demo</a>
                    </div>
                </div>

                <div className="card card-project m-3 mx-auto">
                    <img src={burgerqueen} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Burger Queen</h5>
                        <p className="card-text">Interfaz en la que puedan tomar pedidos usando una tablet (iPad), y enviarlos a la cocina para que se preparen ordenada y eficientemente.</p>
                        <div>
                            <h6>7 semanas</h6>
                            <img src={reactIcon} className="projects-icons" alt="..." />
                            <img src={antdesignIcon} className="projects-icons" alt="..." />
                            <img src={firebaseIcon} className="projects-icons" alt="..." />
                        </div>
                        <a 
                            href="https://github.com/MarianaOlimpia/CDMX009-BurgerQueen" 
                            target='_blank' 
                            rel="noopener noreferrer"
                            className="btn btn-primary">Repositorio</a>
                        <a 
                            href="https://burgerqueen-d2dca.web.app/" 
                            target='_blank' 
                            rel="noopener noreferrer"
                            className="btn btn-primary">Demo</a>
                    </div>
                </div>

                <div className="card card-project m-3 mx-auto">
                    <img src={socialnetwork} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Code Makers</h5>
                        <p className="card-text">Red Social, Single-Page Application (SPA), responsiva en la que podemos escribir, leer, actualizar y eliminar datos.</p>
                        <div>
                            <h6>4 semanas</h6>
                            <img src={htmlIcon} className="projects-icons" alt="..." />
                            <img src={cssIcon} className="projects-icons" alt="..." />
                            <img src={jsIcon} className="projects-icons" alt="..." />
                            <img src={firebaseIcon} className="projects-icons" alt="..." />
                        </div>
                        <a 
                            href="https://github.com/lauraac/CDMX009-Social-Network" 
                            target='_blank' 
                            rel="noopener noreferrer" 
                            className="btn btn-primary">Repositorio</a>
                        <a 
                            href="https://lauraac.github.io/CDMX009-Social-Network/" 
                            target='_blank' 
                            rel="noopener noreferrer" 
                            className="btn btn-primary">Demo</a>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Projects;