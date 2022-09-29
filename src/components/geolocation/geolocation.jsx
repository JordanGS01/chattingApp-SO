import { connectFirestoreEmulator } from "firebase/firestore";
import { useEffect, useState } from "react";

const useGeoLocation=()=>{
    const [location,setLocation] = useState({
        loaded:false,
        coordinates:{lat:"",lng:""},
    });

    const onSuccess=location =>{
        setLocation({
            loaded: true,
            coordinates:{
                lat: location.coords.latitude,
                lng: location.coords.longitude,

            },
        });

    };

    const onError = error=>{
        setLocation({
            loaded:true,
            error,
        });
    };
    useEffect(()=>{
        if(!("geolocation" in navigator)) {
            onError({
                code:0,
                message:"Geolocation not supported",
            });
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);

    },[]);

    return location;

}

const geolocalizacion=()=>{
    navigator.geolocation.getCurrentPosition(function(position){
        const lat=position.coords.latitude
        const lgn=position.coords.longitude
    });
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=0&lon=0&appid=88d2ebc8d41b468af33c8d402ccc429c').then(function(response){
        return response.json();
    }).then( function(obj) {
        //console.log(obj)
    }).catch(function(error){
        console.log("Error")
        console.error(error)
    });
}



export const Geolocation = () => { 
    return(
        <>
           {geolocalizacion()}
        </>
    );
    
}