import "./styles.scss"
const Five = () => {
    const arr=[{percent:37,text:"Decrease in customer acquisition cost on Meta (Facebook & Instagram)"},
                {percent:22,text:"Click-through rate from the landing page to checkout."},
                {percent:17,text:"Increase in LTV from landing page traffic."},
                {percent:246,text:"Increase in ad spend, after implementing a HOOX landing page."}
]
  return (
    <div className="five">
        <div className="contents">
            <p>It works, too</p>
            <h1>As you can see for yourself, we get results</h1>
        </div>
        <div className="tiles">
            {arr.map((ar)=>(
                <div className="tile" key={ar.percent}>
                    <div className="percent">{ar.percent}%</div>
                    <div className="points">{ar.text}</div>
                </div>
            ))}
        </div>
        <div className="early">Early customer data. Results may vary.*</div>
    </div>
  )
}

export default Five