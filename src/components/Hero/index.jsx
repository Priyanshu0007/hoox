import "./style.scss"
const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-sec-1">
            <span className="heading1">
            <h1>We build landing pages that</h1>
                <div className="scribble">
                    <h1 className="scribble-text">unlock</h1>
                    <img src="/public/assets/scribble.png"/>
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
                        <img src="/public/assets/1.png"/>
                        <img src="/public/assets/2.png"/>
                        <img src="/public/assets/3.png"/>
                        <img src="/public/assets/4.png"/>
                        <img src="/public/assets/5.png"/>
                        <img src="/public/assets/6.png"/>
                        <img src="/public/assets/7.png"/>
                        <img src="/public/assets/1.png"/>
                        <img src="/public/assets/2.png"/>
                        <img src="/public/assets/3.png"/>
                        <img src="/public/assets/4.png"/>
                        <img src="/public/assets/5.png"/>
                        <img src="/public/assets/6.png"/>
                        <img src="/public/assets/7.png"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero