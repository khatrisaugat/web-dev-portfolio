import React from 'react'
// import { Container } from 'react-bootstrap'
import Header from '../layouts/Header'
import Main from '../components/Main'
import Switch from '../components/Switch'
import SocialLinks from '../components/SocialLinks'
import Projects from '../layouts/Projects'

function Home() {
    return (
        <>
            <Header />
            <Switch />
            <Main />
            <Projects />
            <SocialLinks />
            <div style={{ height: "300vh", width: "100%" }}></div>
        </>
        // <Container>

        // </Container>
    )
}

export default Home
