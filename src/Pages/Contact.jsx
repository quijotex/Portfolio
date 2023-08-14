const Contact = () => {

   

    return(
        <section className="contact">
            <div className="contact-me">
                <div className="contact-text">
                    <h2>Get in touch</h2>
                    <p>Now that you know a lot about me, let me know if you are interested to work with me.</p>
                </div>
                <div className="contact-form">
                    <form id="form" action="https://formsubmit.co/mariopresiga@gmail.com" method="POST">
                        <label name="name" htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" required/>
                        <label name="email" htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required/>
                        <label name="subject" htmlFor="subject">Subject</label>
                        <input type="text" name="subject" id="subject" required/>
                        <label name="message" htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="5"/>
                        <input type="submit" value="Send"/>
                        <input type="hidden" name="_next" value="https://mariomartinez.netlify.app/#/contact"/>
                        <input type="hidden" name="_captcha" value="false"/>
                    </form>
                </div>
            </div>

       
        </section>
    )
}
export default Contact