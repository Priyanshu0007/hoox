import "./style.scss"

const Second = () => {
    const arr=[{id:1,heading:"We believe in full-funnel marketing",content:"After Apple’s impact on digital advertising, brands need to use landing pages to convert visitors as effectively as possible. Your current website only speaks to one consumer’s problem. A HOOX landing page can be quickly duplicated and customized to speak to as many customer profiles as you want or need."},
                {id:2,heading:"We focus on educating your consumers, not just selling",content:"The HOOX team builds pages to help site visitors understand how your product will improve their lives. This helps our clients build high-LTV customer cohorts from the beginning."},
                {id:3,heading:"Even your grandparents can use our landing pages",content:"Our landing pages pass the age-old grandparent test! Not only are they easy to follow and navigate, but they also load extremely fast. If a visitor has poor cell service, HOOX landing pages still load instantly."},
                {id:4,heading:"Designed specifically to match your traffic source",content:"We’ve found that users react differently to web experiences when they are coming from various marketing channels like TikTok, Facebook, or Google. With that in mind, we build HOOX pages to match your ad angles and traffic sources to make the experience feel more integrated and seamless."}
]
  return (
    <div className="second">
        <div className="second-sec-1">
            <h1>HOOX is trusted by</h1>
            <div className="second-sec-log">
                <img src="/src/assets/lemme.svg"/>
                <img src="/src/assets/feastables.svg"/>
                <img src="/src/assets/caraway.svg"/>
                <img src="/src/assets/glamnetic.svg"/>
            </div>
            <div className="second-sec-log">
                <img src="/src/assets/bearaby.svg"/>
                <img src="/src/assets/cadence.svg"/>
                <img src="/src/assets/lamborgini.png"/>
                <img src="/src/assets/roman.svg"/>
            </div>
        </div>
        <div className="second-sec-2">
            <h2>4 Reasons Why You Should Use HOOX to Build Landing Pages</h2>
            <div className="second-sec-grid">
                {arr.map((ar)=>(
                    <div key={arr.id} className="second-box">
                        <div className="second-id">{ar.id}</div>
                        <div>
                            <div className="second-heading">{ar.heading}</div>
                            <div className="second-content">{ar.content}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Second