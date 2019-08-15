import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";

function PhotoCard(props){

    return (
        <div className = "photo-card-div"> 
            <h2>ID: {props.id}</h2>
            <h2>DATE: {props.date}</h2>
            <img alt = "mars nasa photo" src = {props.url} />
       
       </div>
    );

}

export default PhotoCard;
