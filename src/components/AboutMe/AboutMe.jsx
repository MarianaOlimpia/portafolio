import React from 'react';
import './AboutMe.scss';
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
                <div className='row iconSection mx-auto'>
                    <div className='iconContainer p-2'><img src={htmlIcon} alt='HTML' className='icons'/></div>
                    <div className='iconContainer p-2'><img src={cssIcon} alt='CSS' className='icons'/></div>
                    <div className='iconContainer p-2'><img src={jsIcon} alt='JS' className='icons'/></div>
                    <div className='iconContainer p-2'><img src={firebaseIcon} alt='Firebase' className='icons'/></div>
                    <div className='iconContainer p-2'><img src={reactIcon} alt='ReactJS' className='icons'/></div>
                    <div className='iconContainer p-2'><img src={bootstrapIcon} alt='Bootstrap' className='icons'/></div>
                </div>
            </div>
        </div>
     );
}
 
export default AboutMe;