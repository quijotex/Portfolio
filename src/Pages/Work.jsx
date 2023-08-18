import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import EcommerceAcademlo from '../assets/Images/E-commerceAcademlo.png'
import Ecommerce from '../assets/Images/E-commerce.png'
import Pokedex from '../assets/Images/Pokedex.png'
import RickAndMorty from '../assets/Images/RickAndMorty.png'
import UsersCRUD from '../assets/Images/UsersCRUD.png'
import Weather from '../assets/Images/WeatherApp.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const infoCard = [
{
    image: Ecommerce,
    description: "Collaborative development of an online store for technological products.",
    tecnologies: "React, JavaScript, CSS, HTML5, Bootstrap, React's libraries",
    info: "In this project, I implemented functional solutions that increased the project’s utility. Also, I actively contributed to the team by implementing key features and solving technical issues. At the same time, I used React.js to create a dynamic and appealing interface, CSS with BEM, methodology for consistent styling, Axios for communication with API’s, and React-bootstrap to enhance the user experience.",
    url: "https://e-commerce-technology.netlify.app/#/"
}, 
 {
    image: Pokedex,
    description: "Responsive website dedicated to the Pokémon universe.",
    tecnologies: "React, JavaScript, CSS, HTML5, Bootstrap, React's libraries",
    info: "In this project, I based the development on React.js to build an interactive website and utilized react-paginate, react-router-dom, and react-bootstrap to enhance navigation and design. In addition, I implemented protected routes and structured the content modularly, leveraging react-paginate, react-router-dom, and react-bootstrap to enrich site navigation and styling. Finally, my attention to detail and time management enabled the successful completion of all project phases and timely overcoming of technical challenges.",
    url: "https://pokepokedex-app.netlify.app/"
}, 
{
    image: RickAndMorty,
    description: "Dive into the Rick and Morty's world through this responsive website.",
    tecnologies: "React, JavaScript, CSS, HTML5",
    info: "Based on a given design, I built the best approximation possible, demonstrating my abilities to follow the requiered design at once my skills to implement the needed funcionalities",
    url: "https://rickand-morty-app.netlify.app/"
}, 
{
    image: UsersCRUD,
    description: "Development of a responsive web platform for user management.",
    info: "In this development, I used React.js to create a user-friendly interface, HTML5 and CSS for structure and styling. Also I demonstrated autonomy in making technical decisions and skills in solving challenges. In addition, I successfully implemented the interaction between CRUD methods and communication with API’s using Axios, ensuring an efficient data flow within the platform.",
    tecnologies: "React, JavaScript, CSS, HTML5",
    url: "https://users-crudapp.netlify.app/"
}, 
{
    image: EcommerceAcademlo,
    description: "Academlo's store, which is well-organized and easy to navigate.",
    tecnologies: "JavaScript, CSS, HTML5",
    info: "This is the result of a teamwork's job. In this project, we just used JS, CSS and HTML5, proving our skills working only with vanilla's tools. Here I could demonstrate my teamwork's abilities, my time managment and my communication skills.",
    url: "https://e-commerceacademlo.netlify.app/"
}, 
 {
    image: Weather,
    description: "Search your location and discover the weather with this simple and useful web.",
    tecnologies: "React, CSS, HTML5",
    info: "Useful App to know the weather conditions in your city or wherever you want to know. It has the dark and ligth modes, and I created it consuming an API", 
    url: "https://weather-app-quijotex.netlify.app/"
}
]



const Work = () => {
    return(
        <section className="work-done">
             <h2>Work that I've done</h2>
            <Row>
                        {infoCard.map(item => 
                         <Col key={item.url} className="work-col">
                            <Card  className="work-card">
                           
                            <div className="work-img">
                                 <img className="work-card__img" variant="top" src={item.image}/> 
                                    <div className="work-img--hover">
                                        <div className="work-img__text">  
                                            <h3>Technologies</h3>
                                            <p>{item.tecnologies}</p>
                                        </div> 
                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={
                                                <Tooltip className="view-more">
                                                {item.info}
                                                </Tooltip>
                                            }
                                            >
                                            <Button variant="secondary">View more</Button>
                                            </OverlayTrigger>
                                    </div>
                                </div>
                                <Card.Body className="work-card__body">
                                    <Card.Text>
                                    {item.description}
                                    </Card.Text>
                                    <Link  to={item.url} target="_blank">
                                    <Button className="work-card__button" variant="primary">Go</Button>
                                    </Link>
                                </Card.Body>
                                </Card>
                            </Col>
                         )}
            </Row>
        
        </section>
    )
}

export default Work