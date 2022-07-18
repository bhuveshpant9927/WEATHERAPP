const API_KEY ='98e6d580203a5f5d78d93458c3ae2674'
const makeIconURL=(iconId) => `http://openweathermap.org/img/wn/${iconId}@2x.png`


const getformatWeatherData= async(city, units='metric') =>{
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    const data=await fetch(URL).then((res) => res.json()).then((data) => data);
const{
    weather ,
    main: {temp, feels_like, temp_min , temp_max, pressure, humidity},
    wind: {speed},
    sys: {country},
    name,
}= data;

const {description, icon}=weather[0]

return {
    description, 
    iconURL: makeIconURL(icon), 
    temp, 
    feels_like, 
    temp_min, 
    temp_max, 
    pressure, 
    humidity, 
    speed, 
    country , 
    name,

};
};
export {getformatWeatherData};