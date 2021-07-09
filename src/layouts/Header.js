import { FaHome, FaUser, FaEnvelope, FaCog } from 'react-icons/fa'

function Header() {
    return (
        <header>
            <nav>
                <div className="nav-title">
                    <div className="logo-img"></div>
                    {/* ext-decoration: none; color: #eeeeee;display: block; */}
                    <div className="logo-text"> <a href={'http://google.com'} style={{ textDecoration: "none", color: '#eeeeee', display: "block" }} ><b>Saugat
                        Khatri</b></a> </div>
                </div>
                <div className="navigation">
                    <ul className="nav-list">
                        <li><a href={'http://google.com'}><FaHome /> Home</a></li>
                        <li><a href={'http://google.com'}><FaUser /> About</a></li>
                        <li><a href={'http://google.com'}><FaEnvelope /> Contact</a></li>
                        <li><a href={'http://google.com'}><FaCog className="fa-cog" /> Projects</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
