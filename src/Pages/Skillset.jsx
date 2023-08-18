import skillset from "../assets/Images/Skillset.svg"
const Skillset = () => {
    return(
        <section className="skillset">
            <div className="skillset-skills">
                <div>
                    <div className="skill-img">
                    <img src={skillset} alt=""/>
                    </div>
                    <h3>Languages</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>CSS</li>
                        <li>HTML5</li>
                    </ul>
                </div>
                <div className="skillset-skills--below">
                    <div>
                        <div className="skill-img">
                            <img src={skillset} alt=""/>
                        </div>
                        <h3>Frameworks</h3>
                        <ul>
                            <li>React</li>
                            <li>Boostrap</li>
                        </ul>
                    </div>
                    <div>
                        <div className="skill-img">
                            <img src={skillset} alt=""/>
                        </div>
                        <h3>Source Control</h3>
                        <ul>
                            <li>Git/GitHub</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skillset