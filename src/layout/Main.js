import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../shared/Header/Header';
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer/Footer';
import './Main.css'

const Main = () => {
    return (
        <div id='main-container'>
            <Header></Header>
                <Container>
                    <Outlet></Outlet>
                </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;