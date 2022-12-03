import React from 'react';
import ListProduct from './../../../components/ListProduct';
import 'bootstrap/dist/js/bootstrap.min.js'
import './home.scss'
import Header from '../../layout/header/Header';
import Banner from '../../layout/banner/Banner';
import Footer from '../../layout/footer/Footer';

const Home = () => {
    return (
        <>
            <header>
                <Header/>
                <Banner/>
            </header>
            <main classname="py-5">
                <div classname="container">
                    <h1 classname="fw-light"><i>PRODUCT</i></h1>
                    <p classname="lead">The background images for the slider are set directly in the HTML using inline CSS. The images
                        in this snippet are from <a href="/">Unsplash</a>!</p>
                </div>
                <ListProduct></ListProduct>
            </main>
            <Footer/>
        </>
    )
};
export default Home;