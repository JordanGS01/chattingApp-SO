import { connectFirestoreEmulator } from "firebase/firestore";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { TiWeatherPartlySunny } from 'react-icons/ti'
import Modal from 'react-bootstrap/Modal';
//Iconos
import { TiWeatherCloudy } from 'react-icons/ti';

const geolocalizacion=async()=>{
    
    let lat=0
    let lgn=0
    navigator.geolocation.getCurrentPosition(function (position) {
        lat = position.coords.latitude
        lgn = position.coords.longitude
    }); 
    
    const api_url=('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lgn + '&appid=88d2ebc8d41b468af33c8d402ccc429c')

        async function getAPI(){
            const response=await fetch(api_url);
            const data= await response.json();
            return data;
        };
        const obj=getAPI();
        const x=obj
    return x
}



    /*fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lgn+'&appid=88d2ebc8d41b468af33c8d402ccc429c').then(function(response){
        return response.json();
    }).then( function(obj) {
        console.log(obj)
    }).catch(function(error){
        console.log("Error")
        console.error(error)
    });*/



    






export const Geolocation = () => {
    const [data, setdata] = useState(null);
    const getAPIData=async()=>{
        setdata(await geolocalizacion())
    }
    useEffect(()=>{getAPIData()},[]);
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if(data===null){
        return(<div>
            Cargando...
        </div>)
    }

    return (
        <div>{data? <div>
            <button type="button" class="nes-btn is-primary" onClick={handleShow}><TiWeatherCloudy size={20}></TiWeatherCloudy></button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Weather Conditions</Modal.Title>
                </Modal.Header>
    
                <Modal.Body>{<TiWeatherPartlySunny size={50}></TiWeatherPartlySunny>} Weather:{data.weather[0].description} <br></br> Temperature:{parseInt(data.main.temp-273.15)} Celsius <br></br> Humidity:{data.main.humidity}</Modal.Body>
                <Modal.Footer>
                    <Button variant="nes-btn is-secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>: <></>}</div>
        
        
    );

}