import './Navbar.css';
function Navbar() {
  return (
    <div>
        <div className="navbar-content">
            <h1>Training <span>Studio
                </span> </h1>
            <ul className="nav-list">
                <li><a href="#home">HOME</a></li>
                <li><a href="#about">AbOUT</a></li>
                <li><a href="#classes">CLASSES</a></li>
                <li><a href="#schedule">SCHEDULES</a></li>
                <li><a href="#contact">CONTACT</a></li>
                <li><a href="#signup" className="nav-link">SIGN UP</a></li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar
