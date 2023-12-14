import typeScript from '../assets/Images/TypeScript.svg'
import Python from '../assets/Images/python.svg'
import Tailwind from '../assets/Images/Tailwind.svg'
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl'

const Learning = () => {
    return(
        <section className='learning'>
            <h2><FormattedMessage id="app.learning.title" defaultMessage="These skills will be soon in my skillset"/></h2>
        <div className='learning-svg'>
            <div>
                <img src={typeScript} alt=''/>
            </div>
            <div>
                <img src={Python} alt=''/>
            </div>
            <div>
                <img src={Tailwind} alt=''/>
            </div>
        </div>
        <div className='learning-contact'>
            <h2><FormattedMessage id="app.learning.below" defaultMessage="Would you like to add another skill? Click below"/></h2>
            <Link to="/contact">
            <button><i className='bx bxs-plus-circle'></i></button>
            </Link>
        </div>
   
        
        </section>
    )
}
export default Learning