import React from 'react'
// import { Container } from 'react-bootstrap'
import Header from '../layouts/Header'
import Main from '../components/Main'
import Switch from '../components/Switch'
import SocialLinks from '../components/SocialLinks'
import Projects from '../layouts/Projects'
import Contact from '../layouts/Contact'
import Footer from '../layouts/Footer'
import GoBackToTop from '../components/GoBackToTop'

function Home() {
    const scrollFunc = (e) => {
        console.log(e);
    }
    return (
        <div onScroll={(e) => scrollFunc(e)}>
            <Header />
            <Switch />
            <Main />
            <Projects />
            <Contact />
            <SocialLinks />
            <Footer />
            <GoBackToTop />
            {/* <div style={{ height: "300vh", width: "100%" }}></div> */}
        </div>
        // <Container>

        // </Container>
    )
}

export default Home
