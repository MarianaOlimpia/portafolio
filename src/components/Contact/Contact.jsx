import React from 'react';
import linkedinIcon from '../../Assets/linkedin.png';
import githubIcon from '../../Assets/github.png';
import emailIcon from '../../Assets/email.png';

const Contact = () => {
    return ( 
        <div className='container' id='contact'>
            <h1>Contacto:</h1>
            <div className="row iconSection mx-auto">
                    <div className="ih-item circle colored effect15 left_to_right"><a href="https://linkedin.com/in/marianaolimpiaperez" target="_blank" rel="noopener noreferrer" className='hoverdiv'>
                        <div className="img iconContainer"><img src={linkedinIcon} alt="img" /></div>
                        <div className="info">
                        <h3 >Linkedin</h3>
                    </div></a></div>
                    <div className="ih-item circle colored effect15 left_to_right"><a href="https://github.com/MarianaOlimpia" target="_blank" rel="noopener noreferrer" className='hoverdiv'>
                        <div className="img iconContainer"><img src={githubIcon} alt="img" /></div>
                        <div className="info">
                        <h3 >github</h3>
                    </div></a></div>
                    <div className="ih-item circle colored effect15 left_to_right"><a href="mailto:mariana.olimpiap@gmail.com" target="_blank" rel="noopener noreferrer" className='hoverdiv'>
                        <div className="img iconContainer"><img src={emailIcon} alt="img" /></div>
                        <div className="info">
                        <h3 >email</h3>
                    </div></a></div>
            </div>

        </div>
     );
}
 
export default Contact;