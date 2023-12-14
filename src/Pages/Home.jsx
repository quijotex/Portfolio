import React from 'react'
import Typed from 'typed.js'
import photo from '../assets/Images/ProfilePhoto.webp'
import photo1 from '../assets/Images/Photo1.png'
import photo2 from '../assets/Images/Photo2.png'
import photo3 from '../assets/Images/Photo3.png'
import photo4 from '../assets/Images/Photo4.png'
import { FormattedMessage } from 'react-intl'
import css3 from '../assets/Images/css3.svg'
import html5 from '../assets/Images/html5.svg'
import js from '../assets/Images/js.svg'
import react from '../assets/Images/react.svg'
import tailw from '../assets/Images/tailw.svg'
import ts from '../assets/Images/ts.svg'
import cvspanish from '../assets/CV-Mario-Martinez-Español.pdf'
import cvenglish from '../assets/CV-Mario-Martinez-English.pdf'
import { animated, useSpring } from '@react-spring/web'

const Home = ({ cvMario }) => {

    const animationRight = useSpring({
        from: { x: -1000 },
        to: { x: 0 },
        config: {duration: 500} ,
      })

    
      const animationLeftText = useSpring({
        from: { x: 1000 },
        to: { x: 0 },
        config: {duration: 500} ,
      
      })
      const animationLefth4 = useSpring({
        from: { x: 1000 },
        to: { x: 0 },
        config: {duration: 600} ,
        
      })
      const animationLeftDescription = useSpring({
        from: { x: 1000 },
        to: { x: 0 },
        config: {duration: 700} ,
      })
    
      const animationLeftIconCSS = useSpring({
        from: { x: 1000 },
        to: { x: 0 },
        config: {duration: 750} ,
      })
      const animationLeftIconHTML = useSpring({
        from: { x: 1000 },
        to: { x: 0 },
        config: {duration: 800} ,
      })
      const animationLeftIconJS = useSpring({
        from: { x: 1000 },
        to: { x: 0 },
        config: {duration: 850} ,
      })
      const animationLeftIconReact = useSpring({
        from: { x: 1000 },
        to: { x: 0 },
        config: {duration: 900} ,
      })
      const animationLeftIconTailwind = useSpring({
        from: { x: 1000 },
        to: { x: 0 },
        config: {duration: 950} ,
      })
      const animationLeftIconTs = useSpring({
        from: { x: 1000 },
        to: { x: 0 },
        config: {duration: 1000} ,
      })
      const animationLeftIconDonwload = useSpring({
        from: { x: 1000 },
        to: { x: 0 },
        config: {duration: 1050} ,
      })
      const animatedIn = useSpring({
        from: {opacity: 0 },
        to: { opacity: 1 },
        config: {duration: 1400} ,
      })

    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Mario Martínez", "Frontend Developer"],
            typeSpeed: 200,
            backSpeed: 200,
            startDelay: 10,
            loop: true,
         

        })

        return () => {
            typed.destroy();
        }
    })

    return(
        <main className="home">
            <div className="background-name"/>
            <animated.div style={animationRight} className='photo-me '>
                
                <img src={photo2} alt="" />
             
            </animated.div>
           
            <div className='home-text'>
           
                <animated.div style={animationLeftText} className='text-me'>
                    <span><FormattedMessage id="app.home.iam" defaultMessage={"I'm"}/></span>
                    <span ref={el}/> 
                </animated.div>
                <animated.h4 style={animationLefth4}><FormattedMessage id="app.home.basedin" defaultMessage={"based in Colombia"}/> </animated.h4>
                <animated.div style={animationLeftDescription} className='text-description'>
                    <p><FormattedMessage id="app.home.description" defaultMessage={"I'm a curious and dedicated junior web developer, with a strong passion for the IT industry; always seeking constant and continuous improvement of my knowledge and skills."}/> </p>
                </animated.div>
                <div  className='icons-tools'>
                   
                    <animated.img style={animationLeftIconCSS} src={css3} alt=''/>
                    <animated.img style={animationLeftIconHTML}  src={html5} alt=''/>
                    <animated.img style={animationLeftIconJS}  src={js} alt=''/>
                    <animated.img style={animationLeftIconReact}  src={react} alt=''/>
                    <animated.img style={animationLeftIconTailwind} src={tailw} alt=''/>
                    <animated.img style={animationLeftIconTs} src={ts} alt=''/>
                    <animated.div style={animationLeftIconDonwload} className='curriculum-tools'>
                        {cvMario?  <a href={cvspanish} download="CV Mario Martínez"><button><span><FormattedMessage id="app.home.cvspanish" defaultMessage={"Download CV"}/></span></button></a> :  <a href={cvenglish} download="CV Mario Martínez"><button><span><FormattedMessage id="app.home.cvenglish" defaultMessage={"Download CV"}/></span></button></a> }
                    </animated.div>
                </div>
                    <animated.div style={animationLeftIconDonwload}   className='curriculum-tools--responsive'>
                        {cvMario?  <a href={cvspanish} download="CV Mario Martínez"><button><span><FormattedMessage id="app.home.cvspanish" defaultMessage={"Download CV"}/></span></button></a> :  <a href={cvenglish} download="CV Mario Martínez"><button><span><FormattedMessage id="app.home.cvenglish" defaultMessage={"Download CV"}/></span></button></a> }
                    </animated.div>
                  
            </div>
           
            
           
            <animated.div style={animatedIn} className='home-buttons'>
       
                <a href='https://www.linkedin.com/in/mario-mart%C3%ADnez-961393189/' target='_blank'>
                <button><i className='bx bxl-linkedin-square'></i></button>
                </a>
                <a href='https://github.com/quijotex' target='_blank'>
                <button><i className='bx bxl-github' ></i></button>
                </a>
                <a href='mailto:mariopresiga@gmail.com'>
                <button><i className='bx bx-envelope'></i></button>
                </a>
              
                </animated.div>
            
           
            <div className="background-links"/>
        </main>
    )
}
export default Home;
