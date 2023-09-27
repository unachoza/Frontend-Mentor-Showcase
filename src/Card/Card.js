import "./Card.css"
import { Link } from 'react-router-dom'

const Card = ({ card }) => {
    return (
        <div className='card'>
            <img src={card.img} alt="" />
            <div className="card-title">
                <h3>
                    {card.title}
                </h3>
            </div>
            <div className="card-description">
                <p>
                    {card.description}
                </p>
            </div>
            {card.type === 'component' ?
                <Link className="app-main-components-card-link" to={card.link}>
                    <button className="app-main-item-btn">Go to section <i class="bi bi-arrow-right"></i></button>
                </Link>
                : <a className="app-main-components-card-link" rel="noreferrer" target="_blank" href={card.link}>
                    <button className="app-main-item-btn">Go to live site <i class="bi bi-arrow-right"></i></button>
                </a>
            }
        </div>
    )
}

export default Card