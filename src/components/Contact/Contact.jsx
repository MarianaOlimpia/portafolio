import React from 'react';
import linkedinIcon from '../../Assets/linkedin.png';
import githubIcon from '../../Assets/github.png';
import emailIcon from '../../Assets/email.png';

const Contact = () => {
    return ( 
        <div className='container' id='contact'>
            <h1>Contacto:</h1>
            <div className='container'>

                <div className='row iconSection'>
                    <a 
                        href="https://linkedin.com/in/marianaolimpiaperez" 
                        target="_blank"
                        rel="noopener noreferrer">
                        <div className='iconContainer p-2'><img src={linkedinIcon} alt='CSS' className='icons'/></div>
                    </a>
                    <a 
                        href="https://github.com/MarianaOlimpia" 
                        target="_blank"
                        rel="noopener noreferrer">
                        <div className='iconContainer p-2'><img src={githubIcon} alt='CSS' className='icons'/></div>
                    </a>
                    <a 
                        href="mailto:mariana.olimpiap@gmail.com" 
                        target="_blank"
                        rel="noopener noreferrer">
                        <div className='iconContainer p-2'><img src={emailIcon} alt='CSS' className='icons'/></div>
                    </a>
                    
                </div>
            </div>

        </div>
     );
}
 
export default Contact;