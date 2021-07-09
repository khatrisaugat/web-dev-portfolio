import React from 'react'
// import { Container } from 'react-bootstrap'
import Header from '../layouts/Header'
import Main from '../components/Main'
import Switch from '../components/Switch'

function Home() {
    return (
        <>
            <Header />
            <Switch />
            <Main />
            <div style={{ height: "300vh", width: "100%" }}></div>
        </>
        // <Container>

        // </Container>
    )
}

export default Home
