import React from 'react';
import '../App.css'
import { Routes ,Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import Cards from '../components/Cards'
import Layout from '../components/layout/Layout'
function Home(){
    return(
        <Layout>
        <HeroSection/>
        <Cards/>
        </Layout>
    );
}

export default Home;


