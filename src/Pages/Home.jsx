import React from 'react'
import Typed from 'typed.js'
import photo from '../assets/Images/ProfilePhoto.webp'
import { FormattedMessage } from 'react-intl'

const Home = () => {

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
            <div className='photo-me'>
                <img src={photo} alt="" />
            </div>
            <div className='home-text'>
                <div className='text-me'>
                    <span><FormattedMessage id="app.home.iam" defaultMessage={"I'm"}/></span>
                    <span ref={el}/> 
                </div>
                <h4><FormattedMessage id="app.home.basedin" defaultMessage={"based in Colombia"}/> </h4>
                <div className='text-description'>
                    <p><FormattedMessage id="app.home.description" defaultMessage={"I'm a curious and dedicated junior web developer, with a strong passion for the IT industry; always seeking constant and continuous improvement of my knowledge and skills."}/> </p>
                </div>
            </div>
            <div className='home-buttons'>
                <a href='https://www.linkedin.com/in/mario-mart%C3%ADnez-961393189/' target='_blank'>
                <button><i className='bx bxl-linkedin-square'></i></button>
                </a>
                <a href='https://github.com/quijotex' target='_blank'>
                <button><i className='bx bxl-github' ></i></button>
                </a>
                <a href='mailto:mariopresiga@gmail.com'>
                <button><i className='bx bx-envelope'></i></button>
                </a>
            </div>
            <div className="background-links"/>
        </main>
    )
}
export default Home;
