import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import EcommerceAcademlo from '../assets/Images/E-commerceAcademlo.png'
import Ecommerce from '../assets/Images/E-commerce.png';
import Pokedex from '../assets/Images/Pokedex.png';
import RickAndMorty from '../assets/Images/RickAndMorty.png';
import UsersCRUD from '../assets/Images/UsersCRUD.png';
import Weather from '../assets/Images/WeatherApp.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FormattedMessage } from 'react-intl';
import { animated, useSpring } from '@react-spring/web';

const Work = () => {
    const infoCard = [
        {
            image: Ecommerce,
            description: <FormattedMessage id="app.work.ecommercedescription" defaultMessage={"Collaborative development of an online store for technological products."}/>,
            tecnologies: "React, JavaScript, CSS, HTML5, Bootstrap, React's libraries",
            info: <FormattedMessage id="app.work.ecommerceinfo" defaultMessage={"In this project, I implemented functional solutions that increased the project’s utility. Also, I actively contributed to the team by implementing key features and solving technical issues. At the same time, I used React.js to create a dynamic and appealing interface, CSS with BEM, methodology for consistent styling, Axios for communication with API’s, and React-bootstrap to enhance the user experience."}/>,
            url: "https://e-commerce-technology.netlify.app/#/"
        }, 
         {
            image: Pokedex,
            description: <FormattedMessage id="app.work.pokedexdescription" defaultMessage={"Responsive website dedicated to the Pokémon universe."}/>,
            tecnologies: "React, JavaScript, CSS, HTML5, Bootstrap, React's libraries",
            info: <FormattedMessage id="app.work.pokedexinfo" defaultMessage={"In this project, I based the development on React.js to build an interactive website and utilized react-paginate, react-router-dom, and react-bootstrap to enhance navigation and design. In addition, I implemented protected routes and structured the content modularly. Finally, my attention to detail and time management enabled the successful completion of all project phases and timely overcoming of technical challenges."}/>,
            url: "https://pokepokedex-app.netlify.app/"
        }, 
        {
            image: RickAndMorty,
            description: <FormattedMessage id="app.work.rickandmortydescription" defaultMessage={"Dive into the Rick and Morty's world through this responsive website."}/>,
            tecnologies: "React, JavaScript, CSS, HTML5",
            info: <FormattedMessage id="app.work.rickandmortyinfo" defaultMessage={"Based on a given design, I built the best approximation possible, demonstrating my abilities to follow the requiered design at once my skills to implement the needed funcionalities"}/>,
            url: "https://rickand-morty-app.netlify.app/"
        }, 
        {
            image: UsersCRUD,
            description: <FormattedMessage id="app.work.cruddescription" defaultMessage={"Development of a responsive web platform for user management."}/>,
            info: <FormattedMessage id="app.work.crudinfo" defaultMessage={"In this development, I used React.js to create a user-friendly interface, HTML5 and CSS for structure and styling. Also I demonstrated autonomy in making technical decisions and skills in solving challenges. In addition, I successfully implemented the interaction between CRUD methods and communication with API’s using Axios, ensuring an efficient data flow within the platform."}/>,
            tecnologies: "React, JavaScript, CSS, HTML5",
            url: "https://users-crudapp.netlify.app/"
        }, 
        {
            image: EcommerceAcademlo,
            description: <FormattedMessage id="app.work.ecommerceacadescription" defaultMessage={"Academlo's store, which is well-organized and easy to navigate."}/>,
            tecnologies: "JavaScript, CSS, HTML5",
            info: <FormattedMessage id="app.work.ecommerceacainfo" defaultMessage={"This is the result of a teamwork's job. In this project, we just used JS, CSS and HTML5, proving our skills working only with vanilla's tools. Here I could demonstrate my teamwork's abilities, my time managment and my communication skills."}/>,
            url: "https://e-commerceacademlo.netlify.app/"
        }, 
         {
            image: Weather,
            description: <FormattedMessage id="app.work.weatherdescription" defaultMessage={"Search your location and discover the weather with this simple and useful web."}/>,
            tecnologies: "React, CSS, HTML5",
            info: <FormattedMessage id="app.work.weatherinfo" defaultMessage={"Useful App to know the weather conditions in your city or wherever you want to know. It has the dark and ligth modes, and I created it consuming an API"}/>, 
            url: "https://weather-app-quijotex.netlify.app/"
        }
        ]
    return(
        <section className="work-done">
             <h2><FormattedMessage id="app.work.title" defaultMessage={"Works that I've done"}/></h2>
            <Row>
                        {infoCard.map(item => 
                         <Col key={item.url} className="work-col">
                            <Card  className="work-card">
                           
                            <div className="work-img">
                                 <img className="work-card__img" variant="top" src={item.image}/> 
                                    <div className="work-img--hover">
                                        <div className="work-img__text">  
                                            <h3><FormattedMessage id="app.work.technologies" defaultMessage={"Technologies"}/></h3>
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
                                            <Button variant="secondary"><FormattedMessage id="app.work.viewmore" defaultMessage={"View more"}/></Button>
                                            </OverlayTrigger>
                                    </div>
                                </div>
                                <Card.Body className="work-card__body">
                                    <Card.Text className="work-card__text">
                                    {item.description}
                                    </Card.Text>
                                    <Link  to={item.url} target="_blank">
                                    <Button className="work-card__button" variant="primary"><FormattedMessage id="app.work.go" defaultMessage={"Go"}/></Button>
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