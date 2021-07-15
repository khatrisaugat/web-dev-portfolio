import { FaHome, FaEnvelope, FaCog } from 'react-icons/fa'

function Header() {
    const NavClick = (Id) => {
        document.getElementById(Id).scrollIntoView();
        // alert(Id)
    }
    return (
        <header id="Header">
            <nav>
                <div className="nav-title">
                    <div className="logo-img"></div>
                    {/* ext-decoration: none; color: #eeeeee;display: block; */}
                    <div className="logo-text"> <a href={'http://google.com'} style={{ textDecoration: "none", color: '#eeeeee', display: "block" }} ><b>Saugat
                        Khatri</b></a> </div>
                </div>
                <div className="navigation">
                    <ul className="nav-list">
                        <li><span onClick={() => NavClick("Header")}><FaHome /> Home</span></li>
                        {/* <li><a href={'http://google.com'}><FaUser /> About</a></li> */}
                        <li><span onClick={() => NavClick("Projects")}><FaCog className="fa-cog" /> Projects</span></li>
                        <li><span onClick={() => NavClick("Contact")}><FaEnvelope /> Contact</span></li>
                    </ul >
                </div >
            </nav >
        </header >
    )
}

export default Header
