import IllustrationUniverse from '../assets/Images/IllustrationUniverse.svg'
import { FormattedMessage } from 'react-intl';



// eslint-disable-next-line react/prop-types
const Contact = ({language} ) => {

    return(
        <section className="contact">
            <div className="contact-me">
                <div className="contact-text">
                    <div className='text-contact'>
                        <h2><FormattedMessage id="app.contact.title" defaultMessage="Get in touch"/></h2>
                        <p><FormattedMessage id="app.contact.description" defaultMessage="Now that you know a lot about me, I'd love to hear how I can come in and complement your business with my skills."/></p>
                    </div>
                    <img src={IllustrationUniverse} alt=''/>
                </div>
                <div className="contact-form">
                    <form id="form" action="https://formsubmit.co/mariopresiga@gmail.com" method="POST">
                        <label name="name" htmlFor="name"><FormattedMessage id="app.contact.formname" defaultMessage="Name"/></label>
                        <input type="text" name="name" id="name" required/>
                        <label name="email" htmlFor="email"><FormattedMessage id="app.contact.formemail" defaultMessage="Email"/></label>
                        <input type="email" name="email" id="email" required/>
                        <label name="subject" htmlFor="subject"><FormattedMessage id="app.contact.formsubject" defaultMessage="Subject"/></label>
                        <input type="text" name="subject" id="subject" required/>
                        <label name="message" htmlFor="message"><FormattedMessage id="app.contact.formmessage" defaultMessage="Message"/></label>
                        <textarea name="message" id="message" cols="30" rows="5"/>
                        <input type="submit" value={language?  "¡Conectemos!" : "Let's get started"} />
                        <input type="hidden" name="_next" value="https://mariomartinez.netlify.app/#/contact"/>
                        <input className="form-button" type="hidden" name="_captcha" value="false"/>
                    </form>
                </div>
            </div>       
        </section>
    )
}
export default Contact