import "./style.scss"
const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-sec-1">
            <span className="heading1">
            <h1>We build landing pages that</h1>
                <div className="scribble">
                    <h1 className="scribble-text">unlock</h1>
                    <img src="/scribble.png"/>
                </div>
            </span>
                
            <h1>more efficient advertising spend</h1>
            <h2>We handle research, strategy, copywriting, design, and development. You drive traffic with a higher conversion rate.</h2>
            <div>
                <div>Book a Call</div>
                <div>Learn More</div>
            </div>
        </div>
        <div className="hero-sec-2">
            
            <div className="marquee">
                <div className="transparent-gradient"></div>
                <div className="track">
                    <div className="content">&nbsp;
                        <img src="/1.png"/>
                        <img src="/2.png"/>
                        <img src="/3.png"/>
                        <img src="/4.png"/>
                        <img src="/5.png"/>
                        <img src="/6.png"/>
                        <img src="/7.png"/>
                        <img src="/1.png"/>
                        <img src="/2.png"/>
                        <img src="/3.png"/>
                        <img src="/4.png"/>
                        <img src="/5.png"/>
                        <img src="/6.png"/>
                        <img src="/7.png"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero