import "./Home.scss"
import Card from '../Card/Card'
import { Link } from 'react-router-dom'
import { projectCardData } from "../project-data"

const Home = () => {
    return (
        <div>
            <h1>
                The following are a collection of projects from
                <a href="https://www.frontendmentor.io/challenges" target="_blank">
                    <span> frontendmentor.io </span>
                </a>
            </h1>
            <section className="project-collection">
                <div className="cards-grid">
                    {projectCardData.map((card) => <Card card={card}></Card>)}
                </div>
            </section>
        </div>
    )
}
export default Home