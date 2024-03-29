import "./styles.scss"
import { FaCheckCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Nineth = () => {
  return (
    <div className='nine'>
        <div className="compare">
            <h1>How we compare</h1>
            <p>Your primary website can’t possibly appeal to all customers at all times. That’s where landing pages come in! When you build landing pages with HOOX, you’re able to create a unique site experience tailored to the audience you’re advertising to, and the problem you’re solving for them. With custom landing pages, you can create a red-carpet experience for any site visitor to become a customer over time.</p>
            <div className="table">
                <div className="first-row">
                    <div></div>
                    <div>No Internal Resources Needed</div>
                    <div>External Customer POV</div>
                    <div>Built by LP experts (over $180M in LP GMV)</div>
                    <div>Formal QA Process for bugs & load time</div>
                    <div>Easy to edit by the marketing team</div>
                    <div></div>
                </div>
                <div className="secound-row">
                    <div className="row-logo">HOOX</div>
                    <div><FaCheckCircle color="#262420" size={30}/></div>
                    <div><FaCheckCircle color="#262420" size={30}/></div>
                    <div><FaCheckCircle color="#262420" size={30}/></div>
                    <div><FaCheckCircle color="#262420" size={30}/></div>
                    <div><FaCheckCircle color="#262420" size={30}/></div>
                    <div></div>
                </div>
                <div className="third-row">
                    <div>In-House Team</div>
                    <div><RxCross1 size={20}/></div>
                    <div><RxCross1 size={20}/></div>
                    <div><RxCross1 size={20}/></div>
                    <div><RxCross1 size={20}/></div>
                    <div><RxCross1 size={20}/></div>
                    <div></div>
                </div>
                <div className="fourth-row">
                    <div>Standard LP Agencies</div>
                    <div>Sometimes</div>
                    <div><RxCross1/></div>
                    <div>Sometimes</div>
                    <div>Sometimes</div>
                    <div><RxCross1/></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Nineth