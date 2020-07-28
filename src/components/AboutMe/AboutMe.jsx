import React from 'react';
import './AboutMe.scss';
import '../../Assets/ihover.css'
import htmlIcon from '../../Assets/html.png';
import cssIcon from '../../Assets/css.png';
import jsIcon from '../../Assets/javascript.png';
import firebaseIcon from '../../Assets/firebase.png';
import reactIcon from '../../Assets/react.png';
import bootstrapIcon from '../../Assets/bootstrap.png';

const AboutMe = () => {
    return ( 
        <div className='container' id='aboutme'>
            <h1>Acerca de mi:</h1>
            <p className='blockquote'>Front-End developer egresada de Laboratoria. Me encanta encontrar nuevas maneras de resolver los problemas, retarme a aprender cada día algo diferente y adquirir nuevas habilidades. </p>
            <div className='container'>
                <h2>Skills</h2>
                <div>
                <div className="row iconSection mx-auto">
                    <div className="ih-item circle colored effect15 left_to_right"><div className='hoverdiv'>
                        <div className="img iconContainer"><img src={htmlIcon} alt="img" /></div>
                        <div className="info">
                        <h3 >HTML5</h3>
                    </div></div></div>
                    <div className="ih-item circle colored effect15 left_to_right"><div className='hoverdiv'>
                        <div className="img iconContainer"><img src={cssIcon} alt="img" /></div>
                        <div className="info">
                        <h3 >CSS3</h3>
                    </div></div></div>
                    <div className="ih-item circle colored effect15 left_to_right"><div className='hoverdiv'>
                        <div className="img iconContainer"><img src={jsIcon} alt="img" /></div>
                        <div className="info">
                        <h3 >Javascript</h3>
                    </div></div></div>
                    <div className="ih-item circle colored effect15 left_to_right"><div className='hoverdiv'>
                        <div className="img iconContainer"><img src={firebaseIcon} alt="img" /></div>
                        <div className="info">
                        <h3 >Firebase</h3>
                    </div></div></div>
                    <div className="ih-item circle colored effect15 left_to_right"><div className='hoverdiv'>
                        <div className="img iconContainer"><img src={reactIcon} alt="img" /></div>
                        <div className="info">
                        <h3 >React</h3>
                    </div></div></div>
                    <div className="ih-item circle colored effect15 left_to_right"><div className='hoverdiv'>
                        <div className="img iconContainer"><img src={bootstrapIcon} alt="img" /></div>
                        <div className="info">
                        <h3 >Bootstrap</h3>
                    </div></div></div>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default AboutMe;