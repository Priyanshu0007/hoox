import "./style.scss"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-sec-1">HOOX</div>
        <div className="nav-sec-2">
            <div>Why HOOX</div>
            <div>About</div>
            <div>Case Studies</div>
            <div className="nav-book">Book a Call</div>
            <div className="nav-start">Get started</div>
        </div>
    </div>
  )
}

export default Navbar