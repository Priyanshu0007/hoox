import "./style.scss"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <h2>Subscribe to our newsletter.</h2>
        <h4>Join the 25000+ CEOs, Growth experts...</h4>
        <form action="">
        <input type="email" required placeholder="Your email"/>
        <button className="bt">Subscribe</button>
        </form>
        <div className="lower-footer">
            <div className="lower-footer-1">
                <div className="footer-logo">HOOX</div>
                <div className="footer-logo-next">
                    <div>Contact us hello@hoox.co</div>
                    <div>Follow us</div>
                    <div><FaInstagram size={25}/></div>
                    <div><FaLinkedinIn size={25}/></div>
                    <div><FaTwitter size={25}/></div>
                </div>
            </div>
            <div className="lower-footer-2">
                <div className="lower-footer-21">
                    <div>Privacy Policy</div>
                    <div>Terms of Use</div>
                </div>
                <div>© Copyright. All rights reserved.</div>
            </div>
        </div>
    </div>
  )
}

export default Footer