import React from 'react';
import './Projects.scss';
import cipher from '../../Assets/cipher.jpg';
import steam from '../../Assets/steam.png';
import redsocial from '../../Assets/social-network.png';

const Projects = () => {
    return ( 
        <div className='container mx-auto' id='projects'>
            <h1>Proyectos:</h1>

            <div className='row cards-container'>
                <div className="card card-project m-3 mx-auto">
                    <img src={cipher} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Cipher</h5>
                        <p className="card-text">Sirve para que el usuario pueda cifrar y descifrar un texto indicando un desplazamiento específico de caracteres (offset)</p>
                        <a 
                            href="https://github.com/MarianaOlimpia/CDMX009-cipher" 
                            target='_blank' 
                            rel="noopener noreferrer" 
                            className="btn btn-primary"
                        >Repositorio</a>
                        <a 
                            href="https://github.com/MarianaOlimpia/CDMX009-cipher" 
                            target='_blank' 
                            rel="noopener noreferrer" 
                            className="btn btn-primary">Demo</a>
                    </div>
                </div>

                <div className="card card-project m-3 mx-auto">
                    <img src={steam} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Steam Noticias</h5>
                        <p className="card-text">Steam noticias: Lista noticias relacionadas a los videojuegos presentes en la plataforma de Steam.</p>
                        <a 
                            href="https://github.com/MarianaOlimpia/CDMX009-Data-Lovers" 
                            target='_blank' 
                            rel="noopener noreferrer"
                            className="btn btn-primary">Repositorio</a>
                        <a 
                            href="https://marianaolimpia.github.io/CDMX009-Data-Lovers/" 
                            target='_blank' 
                            rel="noopener noreferrer"
                            className="btn btn-primary">Demo</a>
                    </div>
                </div>

                <div className="card card-project m-3 mx-auto">
                    <img src={redsocial} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Code Makers</h5>
                        <p className="card-text">El objetivo de este proyecto es construir una Red Social, Single-Page Application (SPA), responsiva en la que podamos escribir, leer, actualizar y eliminar datos.</p>
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