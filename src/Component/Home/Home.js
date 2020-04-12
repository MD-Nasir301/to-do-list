import React from 'react';
import './Home.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ListInputForm from '../ListInputForm/ListInputForm';

const Home = () => {
    return (
        <div className="Home">
            <Header></Header>
            <ListInputForm></ListInputForm>
            <Footer></Footer>

        </div>
    );
};

export default Home;
