import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import IllustrationMan from '../assets/Images/IllustrationMan.svg'
import { FormattedMessage } from 'react-intl';
import { useState } from 'react';





const AboutMe = () => {

        const [ isObjectives, setIsObjectives ] = useState(false);
        const [ isEducation, setIsEducation ] = useState(false);
        const [ isLanguage, setIsLanguage ] = useState(false);
   
    const objectivesAndGoals = (props) => (
      
        <Tooltip className='objectives' {...props}>
        <div className='render-uls spanish-version'>
            <div>
                <ul>
                    <h2> <FormattedMessage id='app.aboutme.goal' defaultMessage={"Goals"}/></h2>
                    <li>
                        <p>
                        <FormattedMessage id='app.aboutme.goalone' defaultMessage={"Become a proficient front-end developer. I'm eager to create visually appealing and responsive web interfaces that enhance user experiences and."}/>
                        </p>
                    </li>
                    <li>
                        <p><FormattedMessage id='app.aboutme.goaltwo' defaultMessage={"Engage in team projects to learn diverse technologies and refine collaboration skills."}/>
                        
                        </p>
                    </li>
                    <li>
                        <p><FormattedMessage id='app.aboutme.goalthree' defaultMessage={"Continuously adapt to new web trends and tools, ensuring innovative contributions to modern web applications."}/>
                        </p>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <h2><FormattedMessage id='app.aboutme.objectives' defaultMessage={"Objectives"}/></h2>
                    <li>
                        <p><FormattedMessage id='app.aboutme.objectivesone' defaultMessage={"Collaborate on projects to sharpen my front-end development skills, making meaningful contributions within 6 months."}/>
                      
                        </p>
                    </li>
                    <li>
                        <p><FormattedMessage id='app.aboutme.objectivestwo' defaultMessage={"Seek mentorship, engage in code reviews, and refine coding practices to actively contribute to team projects within 1 year."}/>
                        
                        </p>
                    </li>
                    <li>
                        <p><FormattedMessage id='app.aboutme.objectivesthree' defaultMessage={"Embrace new technologies and practices to ensure valuable, forward-looking contributions to the company's web development efforts."}/>
                        </p>
                    </li>   
                </ul> 
            </div>
        </div>
        </Tooltip>
         );
       

         const Education = (props) => (
        <Tooltip  className='education' {...props}>
          <div>
          <i className='bx bxs-graduation bx-md'></i>
          <p><FormattedMessage id='app.aboutme.study' defaultMessage={"Web Full Stack Developer, Academlo, Medellín. April 2023 - September 2023"}/></p>
          </div>
        </Tooltip>
         )
          

         const languages = (props) => (
            <Tooltip className='languages' {...props}>
              <div>
                <div>
                <h2><FormattedMessage id="app.aboutme.spanish" defaultMessage={"Spanish"}/></h2>
                <p><FormattedMessage id="app.aboutme.languagesone" defaultMessage={"Native speaker"}/></p>
                </div>
                <div>
                <h2><FormattedMessage id="app.aboutme.english" defaultMessage={"English"}/></h2>
                <p>B2</p>
                </div>
              </div>
            </Tooltip>
             )
        
    return (
        <section className='aboutme'>
            <div className='aboutme-buttons'>
                {[
                    {written: objectivesAndGoals,
                    button: <FormattedMessage id="app.aboutme.buttonone" defaultMessage={"Objectives and Goals"}/>
                    }, {written: Education,
                    button: <FormattedMessage id="app.aboutme.buttontwo" defaultMessage={"Education"}/>  }, 
                    {written: languages,
                        button: <FormattedMessage id="app.aboutme.buttonthree" defaultMessage={"Languages"}/> }].map(text => (
                    <OverlayTrigger
                    key={text.written}
                    trigger={'focus'}
                    placement={'right'}
                    overlay={text.written}
                    >
                    <Button  variant="secondary">{text.button}</Button>
                    </OverlayTrigger>
                ))}
             </div>
             { /* responsive  */}
               
                   <div className='responsive-modal'>
                        <button onClick={() => setIsObjectives(true)}><FormattedMessage id="app.aboutme.buttonone" defaultMessage={"Objectives and Goals"}/> </button>   
                       
                        <button onClick={() => setIsEducation(true)}><FormattedMessage id="app.aboutme.buttontwo" defaultMessage={"Education"}/> </button> 
                    
                        <button onClick={() => setIsLanguage(true)}><FormattedMessage id="app.aboutme.buttonthree" defaultMessage={"Languages"}/> </button>
                    </div>
          

        {/* Responsive Objectives */}
     
           <div className={`objectives-modal ${isObjectives? "isOn" : ""}`}>
                <div className='objectives-modal--open spanish-modal--version'>
                <button onClick={() => setIsObjectives(false)}className="close-objectives"><i className='bx bx-x bx-sm'></i></button>
                    <div>
                        <ul>
                            <h2> <FormattedMessage id='app.aboutme.goal' defaultMessage={"Goals"}/></h2>
                            <li>
                                <p>
                                <FormattedMessage id='app.aboutme.goalone' defaultMessage={"Become a proficient front-end developer. I'm eager to create visually appealing and responsive web interfaces that enhance user experiences."}/>
                                </p>
                            </li>
                            <li>
                                <p><FormattedMessage id='app.aboutme.goaltwo' defaultMessage={"Engage in team projects to learn diverse technologies and refine collaboration skills."}/>
                                
                                </p>
                            </li>
                            <li>
                                <p><FormattedMessage id='app.aboutme.goalthree' defaultMessage={"Continuously adapt to new web trends and tools, ensuring innovative contributions to modern web applications."}/>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <h2><FormattedMessage id='app.aboutme.objectives' defaultMessage={"Objectives"}/></h2>
                            <li>
                                <p><FormattedMessage id='app.aboutme.objectivesone' defaultMessage={"Collaborate on projects to sharpen my front-end development skills, making meaningful contributions within 6 months."}/>
                            
                                </p>
                            </li>
                            <li>
                                <p><FormattedMessage id='app.aboutme.objectivestwo' defaultMessage={"Seek mentorship, engage in code reviews, and refine coding practices to actively contribute to team projects within 1 year."}/>
                                
                                </p>
                            </li>
                            <li>
                                <p><FormattedMessage id='app.aboutme.objectivesthree' defaultMessage={"Embrace new technologies and practices to ensure valuable, forward-looking contributions to the company's web development efforts."}/>
                                </p>
                            </li>   
                        </ul> 
                    </div>
                </div>
            </div>
            {/* Fin responsive Objective */}
            
            {/* Responsive Education */}
                <div className={`education-modal ${isEducation? "isOn" : ""}`}>
                    <div className='education-modal--open'>
                    <button onClick={() => setIsEducation(false)}className="close-education"><i className='bx bx-x bx-sm'></i></button>
                        <i className='bx bxs-graduation bx-md'></i>
                        <p><FormattedMessage id='app.aboutme.study' defaultMessage={"Web Full Stack Developer, Academlo, Medellín. April 2023 - September 2023"}/></p>
                    </div>
                 </div>
            {/* Fin responsive Education */}
            {/* Responsive languages */}
                    <div className={`language-modal ${isLanguage? "isOn" : ""}`}>
                        <div className='language-modal--open language-modal-text'>
                        <button onClick={() => setIsLanguage(false)}className="close-language"><i className='bx bx-x bx-sm'></i></button>
                            <div>
                                <h2><FormattedMessage id="app.aboutme.spanish" defaultMessage={"Spanish"}/></h2>
                                <p><FormattedMessage id="app.aboutme.languagesone" defaultMessage={"Native speaker"}/></p>
                            </div>
                            <div>
                                <h2><FormattedMessage id="app.aboutme.english" defaultMessage={"English"}/></h2>
                                <p>B2</p>
                            </div>
                         </div>
                    </div>
                {/* Fin responsive Languages */}
            { /* fin responsive */}
            <div className='illustration'>
                <img className='illustration-man' src={IllustrationMan} alt=''></img>
            </div>
        </section>
      );
}
export default AboutMe
