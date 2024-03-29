/* eslint-disable react/no-unescaped-entities */
import "./styles.scss"
import { TiTick } from "react-icons/ti";
const Eighth = () => {
  return (
    <div className="eigth">
        <div className="eigth-sec-1">
            <h3>Let’s talk shop</h3>
            <h1>Our landing page solution</h1>
            <h2>We build digital experiences for brands through custom landing pages. This helps you acquire customers more effectively with higher conversion rates, lower CPAs, and improved ROAS.</h2>
            <p>Our pages help consumers understand who you are, what you sell, how it helps them, and why you’re the best option on the market.</p>
        </div>
        <div className="eigth-sec-2">
            <h4>Landing page build</h4>
            <div className="price">
                <span>$5,000</span>
                <h5>1 fully custom landing page build included</h5>
            </div>
            <h6>What's included</h6>
            <div className="eight-point-box">
                <div className="eight-point-left">
                    <h7><TiTick/>Ideation & Concept</h7>
                    <h7><TiTick/>Wireframe (UX)</h7>
                    <h7><TiTick/>Copywriting</h7>
                    <h7><TiTick/>Ul Design with Existing Brand Guidelines and assets</h7>
                    <h7><TiTick/>Development</h7>
                </div>
                <div className="eight-point-left">
                    <h7><TiTick/>Shop functionality</h7>
                    <h7><TiTick/>Email and phone capture</h7>
                    <h7><TiTick/>Analytics integration</h7>
                    <h7><TiTick/>Tracking tools (FB, GTM, MS Clarity)</h7>
                </div>
            </div>
            <div className="eight-btn">Build my Page</div>
        </div>
    </div>
  )
}

export default Eighth