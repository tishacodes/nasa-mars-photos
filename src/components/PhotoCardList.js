import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard.js";

function PhotoCardList(){

    const [photoCardData, setPhotoCardData] = useState([]);

    useEffect(() => {        

        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY")
        .then(response => {  

        console.log(response.data.photos);
        
        //assign the response from the server to photoCardDataResponse
        const photoCardDataResponse = response.data.photos;
        setPhotoCardData(photoCardDataResponse);

        });

    }, []); 


    return (
        <div className = "photo-list-div">
        {photoCardData.map( (photoCard) =>             
            {  
                return(           
                <PhotoCard key = {photoCard.id} id = {photoCard.id} date = {photoCard.earth_date} url = {photoCard.img_src}/>        
                );
            })}


        </div>

    );
}

export default PhotoCardList;