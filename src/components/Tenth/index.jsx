/* eslint-disable react/no-unescaped-entities */
import "./styles.scss"

const Tenth = () => {
  return (
    <div className="tenth">
        <h1>What others have to say about working with HOOX</h1>
        <div className="reviews">
            <div className="review">
                <div className="review-op"></div>
                <p>"Working with HOOX allowed
                    us to quickly test new angles,
                    copy, and positioning without
                    changing our homepage. We
                    saw a significant increase in
                    CVR. We would definitely
                    recommend working with the
                    HOOX team."</p>
                <div className="identity">
                    <img src="/Courtney.png"/>
                    <div className="identity-details">
                        <h4>Courtney Toll</h4>
                        <h5>CEO of Nori</h5>
                    </div>
                </div>
            </div>
            <div className="review">
                <p>"Plain and simple, their
                    landing pages lowered our
                    CPA by ~30%, and perfectly
                    told the Caraway story.""</p>
                <div className="identity">
                    <img src="/jordan.png"/>
                    <div className="identity-details">
                        <h4>Jordan Nathan</h4>
                        <h5>Founder of Caraway</h5>
                    </div>
                </div>
            </div>
            <div className="review">
                <div className="review-op"></div>
                <p>"I recommend HOOX to every
                    founder. Nik's team did their
                    own research while also
                    presenting a strong
                    openness to collaboration
                    and deep awareness of the
                    brand. Also, their turnaround
                    times are out of this world."</p>
                <div className="identity">
                    <img src="/stephanie.png"/>
                    <div className="identity-details">
                        <h4>Stephanie Hon</h4>
                        <h5>Founder of Cadence</h5>
                    </div>
                </div>
            </div>
        </div>
        <div className="tenth-btn">
            <div className="tenth-call">Book a call</div>
            <div className="tenth-get">Get Started</div>
        </div>
    </div>
  )
}

export default Tenth