import { useLocation } from "react-router-dom";
import { useState } from "react";
import NavBar from "./NavBar";

const NewsDetails = () => {

    const location = useLocation();

    return ( 
        <div className="detail_site">
            <NavBar />
            <h1>{location.state.title}</h1>
            <img src={location.state.urlToImage} alt="#" />
            <p>{location.state.description}</p>
            <p>{location.state.content}</p>
            <p>{location.state.publishedAt}</p>
        </div>
    );
}

export default NewsDetails;
