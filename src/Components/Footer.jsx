import { Outlet } from "react-router-dom";

const Footer = () => {
    return(
    <footer>
        <Outlet/>
        <div className='footer-buttons'>
            <a href='https://www.linkedin.com/in/mario-mart%C3%ADnez-961393189/' target='_blank'>
            <button><i className='bx bxl-linkedin-square'></i></button>
            </a>
            <a href='https://github.com/quijotex' target='_blank'>
            <button><i className='bx bxl-github'></i></button>
            </a>
            <a href='mailto:mariopresiga@gmail.com'>
            <button><i className='bx bx-envelope'></i></button>
            </a>
        </div>
    
</footer>
    )
}

export default Footer; 