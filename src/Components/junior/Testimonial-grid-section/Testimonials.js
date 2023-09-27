import "./Testimonials.css"
import testimonials from './data.js'

const Testimonials = () => {
    return (
        <div className="parent">
            {testimonials.map((test, i) => {
                return (
                    <div className={`review-container testimonial-${i + 1}`} >
                        <div className="profile">
                            <div className="avatar">
                                <img className="profil-img" src={test.img} alt="avatar" />
                            </div>
                            <div className="user-details">
                                <figcaption className="user-name">{test.author}</figcaption>
                                <div className="user-title">{test.authorInfo}</div>
                            </div>
                        </div>
                        <blockquote className="quote">
                            {test.title}
                        </blockquote>
                        <div className="review">
                            {test.testimonial}
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default Testimonials
