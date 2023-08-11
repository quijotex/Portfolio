import photo from '../assets/Images/ProfilePhoto.webp'

const AboutMe = () => {
    return(
        <main className="aboutme">
        <div className="background-name"/>
        <div className='photo-me'>
            <img src={photo} alt="" />
        </div>
        <div className="background-links"/>

        </main>
    )
}
export default AboutMe
