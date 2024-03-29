/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
import Questions from "./Questions"
import "./styles.scss"

const FAQ = () => {
    const question=[
        {id:1,question:"Why is Unbounce your preferred platform to develop landing pages on?",answer:"A few main reasons: page speed is very fast (less than 1 second load time), it's fast to stand up for us, and easy to edit for you (all drag & drop)."},
        {id:2,question:"How long does the onboarding questionnaire take?",answer:"Less than 15 minutes — and then you're done. The questionnaire goes in-depth to collect relevant assets (brand book, fonts, etc), learn your brand, understand relevant advertising data, and understand your goals."},
        {id:3,question:"How do I know if I should buy a page?",answer:"If you spend over $30,000 per month in paid traffic, you're a candidate! If you sell a high AOV product, a product with a high barrier to entry, or you're creating a new category, you'll greatly benefit from more focused landing pages."},
        {id:4,question:"Can my Facebook pixel be placed on the landing page?",answer:"Yes! We place any and all tracking pixels, or even just a Google Tag Container. This allows all ad platforms to still ingest data from the landing page, and optimize its own algorithms without a loss in data."},
        {id:5,question:"Why wouldn't I just make my homepage like a landing page?",answer:"Your goal with landing pages isn't just to shorten the conversion journey, but it's also to personalize that experience. If you just edit a homepage and settle for that, you're still just messaging one way, versus speaking to different benefits based on different traffic sources."},
        {id:6,question:"What paid channels can I use these landing pages with?",answer:"You can run them with any channel. Our clients most commonly run traffic to these pages from Facebook, Instagram, Pinterest, TikTok, Taboola, TV, YouTube, podcast, and influencers."},
        {id:7,question:"How much can I expect my CPA to drop?",answer:"It's not easy to answer this question because every brand and consumer market is different. On average, we see at least a 20% drop in CPA."},
        {id:8,question:"Who needs to be involved from the client-side?",answer:"As many, or as few people, as you'd prefer to have. We can even set up a shared Slack channel between our teams to communicate with speed, and avoid emails getting lost."},
        {id:9,question:"Will the page look like it could be a part of our website?",answer:"Yes, we'll design your landing page with your brand's look and feel in mind. After we analyze your brand guidelines and the current website and we implement the coherent style that is familiar to your customers."},
        {id:10,question:"How long does the on-boarding take?",answer:"After you make the purchase, we'll send you the onboarding form together with instructions on how to set up your Unbounce account, in case you don't have one. Once you submit the onboarding form, we'll review it in detail and after that, we are ready to go."},
    ]
  return (
    <div className="faq">
        <h1>Frequently Asked Questions</h1>
        <div className="questions">
            {question.map((q)=><Questions key={q.id} question={q.question} answer={q.answer}/>)}
        </div>
        <div className="cards">
          <div className="left-card">
            <h2>Ready to make your ads more efficient?</h2>
            <h4>See why companies like Jim Beam Whiskey, Milk Bar, Caraway, JUDY, Feastables, Poo~Pourri, Glamnetic and more, build landing pages with HOOX.</h4>
            <div className="card-build-btn">Build my page</div>
            <img src="/public/assets/card1.png"/>
          </div>
          <div className="right-card">
            <h3>Not ready to buy yet? Book a call with us 🤙</h3>
            <h5>Schedule time to discuss how HOOX could supercharge your marketing needs.</h5>
            <div className="card-chat-btn">Let's chat</div>
            <img src="/public/assets/card2.png"/>
          </div>
        </div>
    </div>
  )
}

export default FAQ