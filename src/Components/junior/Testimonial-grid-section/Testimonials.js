import "./Testimonials.css"
import testimonials from './data.js'

const Testimonials = () => {
    console.log('hello', { testimonials })
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

{/* <figure className="review-container testimonial-2">
                <div class="profile">
                    <div class="avatar">
                        <img src="/images/image-jonathan.jpg" alt="joimage-jonathan.jpg" />
                    </div>
                    <div class="user-details">
                        <figcaption class="user-name">Jonathan Walters</figcaption>
                        <div class="user-title">Verified Graduate</div>
                    </div>
                </div>
                <blockquote class="quote">
                    The team was very supportive and kept me motivated
                </blockquote>
                <div class="review">
                    "I started as a total newbie with virtually no coding skills. I now work
                    as a mobile engineer for a big company. This was one of the best
                    investments I’ve made in myself."
                </div>
            </figure>
            <figure class="review-container testimonial-4">
                <div class="profile">
                    <div class="avatar">
                        <img src="/images/image-jeanette.jpg" alt="jimage-jeanette.jpg" />
                    </div>
                    <div class="user-details">
                        <figcaption class="user-name">Jeanette Harmon</figcaption>
                        <div class="user-title">Verified Graduate</div>
                    </div>
                </div>
                <blockquote class="quote">
                    An overall wonderful and rewarding experience
                </blockquote>
                <div class="review">
                    "Thank you for the wonderful experience! I now have a job I really enjoy,
                    and make a good living while doing something I love."
                </div>
            </figure>
            <figure class="review-container testimonial-5">
                <div class="profile">
                    <div class="avatar">
                        <img src="/images/image-patrick.jpg" alt="pimage-patrick.jpg" />
                    </div>
                    <div class="user-details">
                        <figcaption class="user-name">Patrick Abrams</figcaption>
                        <div class="user-title">Verified Graduate</div>
                    </div>
                </div>
                <blockquote class="quote">
                    Awesome teaching support from TAs who did the bootcamp themselves.
                    Getting guidance from them and learning from their experiences was easy.
                </blockquote>
                <div class="review">
                    "The staff seem genuinely concerned about my progress which I find really
                    refreshing. The program gave me the confidence necessary to be able to
                    go out in the world and present myself as a capable junior figureeloper.
                    The standard is above the rest. You will get the personal attention you
                    need from an incredible community of smart and amazing people."
                </div>
            </figure>
            <figure class="review-container testimonial-3">
                <div class="profile">
                    <div class="avatar">
                        <img src="/images/image-kira.jpg" alt="kira" />
                    </div>
                    <div class="user-details">
                        <figcaption class="user-name">Kira Whittle</figcaption>
                        <div class="user-title">Verified Graduate</div>
                    </div>
                </div>
                <blockquote class="quote">
                    Such a life-changing experience. Highly recommended!
                </blockquote>
                <div class="review">
                    "Before joining the bootcamp, I’ve never written a line of code. I needed
                    some structure from professionals who can help me learn programming step
                    by step. I was encouraged to enroll by a former student of theirs who
                    can only say wonderful things about the program. The figureire
                    curriculum and staff did not disappoint. They were very hands-on and I
                    never had to wait long for assistance. The agile team project, in
                    particular, was outstanding. It took my learning to the next level in a
                    way that no tutorial could ever have. In fact, I’ve often referred to it
                    during interviews as an example of my developent experience. It
                    certainly helped me land a job as a full-stack developer after receiving
                    multiple offers. 100% recommend!"
                </div>
            </figure>
        </body>
    ) */}
