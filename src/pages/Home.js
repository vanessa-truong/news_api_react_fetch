import Newslist from "../components/NewsList";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";




const Home = () => {
    return ( 
        <div>
            <NavBar/>
            <Newslist />
        </div>
    );
}

export default Home;


