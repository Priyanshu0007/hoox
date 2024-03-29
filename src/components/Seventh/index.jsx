import "./styles.scss"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Seventh = () => {

  return (
    <div className="seventh">
        <div className="contents">
            <p>It works, too</p>
            <h1>Case studies</h1>
        </div>
        <div className="case-study">
            <div><img src="/caraway.png"/></div>
            <div className="case-study-content">
                <h2>Caraway</h2>
                <h4>As a new brand in a competitive space, Caraway hired HOOX to create landing pages for paid traffic coming from Google, Facebook, and its affiliate partners.</h4>
                <div className="bundle">
                    <div className="case-study-subcontent">
                        <h3>74%</h3>
                        <h5>Increase in conversion rate (a user landing on the site and checking out)</h5>
                        <h6>Channels - IG, TikTok</h6>
                    </div>
                    <div className="case-study-subcontent">
                        <h3>32%</h3>
                        <h5>Decrease in cost of customer acquisition, while also lowering the time to purchase.</h5>
                    </div>
                </div>
                <div className="arrow">
                    <FaArrowLeft size={20}/>
                    1 / 2
                    <FaArrowRight size={20}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Seventh