import { FaArrowAltCircleRight, FaQuoteLeft, FaQuoteRight, FaArrowAltCircleDown } from 'react-icons/fa'
function Main() {
    const ScrollDown = () => {
        window.scroll(0, window.innerHeight - 100);
    }
    return (
        <div className="main">
            <div className="main-logo"><span><p className="text sp-text rotate-90">Developer</p></span></div>
            <div className="main-text"> <h2><span className="sp-text"><FaArrowAltCircleRight className="fa-arrow-circle-right" /></span> Hi.</h2>
                <p className="text">I'm Saugat Khatri,<br /><span className="sp-text">web </span> developer.<br /></p>
                <span className="text sp-text scrollDownText" onClick={ScrollDown}>
                    <br />
                    <br />
                    <FaArrowAltCircleDown /> scroll down
                </span>
            </div>
            <div className="main-content">
                <span className="circle circle1"></span>
                <span className="circle circle2"></span>
                <span className="circle circle3"></span>

                <div className="main-glass">

                    <p className="text"><FaQuoteLeft /><br />Craft your ideas and I will bring them to life.<br /><FaQuoteRight /></p>
                </div>
            </div>
        </div>
    )
}

export default Main
