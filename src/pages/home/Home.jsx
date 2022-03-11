import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.scss';

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className='home-container'>
                <Navbar />
                Home development
            </div>
        </div>
    );
}

export default Home;
