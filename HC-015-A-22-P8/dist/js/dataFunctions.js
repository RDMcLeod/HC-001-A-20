const WEATHER_API_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxx';
export const setLocationObject = (locationObj, coordsObj) => {
    const {lat, lon, name} = coordsObj;
    locationObj,setLat(lat);
    locationObj,setLon(lon);
    locationObj,setName(name);
    if (unit) {
        locationObj,setUnit(Unit);
    };
};

export const getHomeLocation = () => {
    return localStorage.getItem("defaultWeatherLocation");
};

export const getGeoWeatherFromCoords = async (locationObj) => {
    const lat = locationObj.getLat();
    const lon = locationObj.getLon();
    const units = locationObj.getUnit();
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=${units}&appid=${WEATHER_API_KEY}`;
    try {
        const weatherStream = await fetch(url);
        const weatherJson =await weatherStream.json();
        return weatherJson;
    } catch (err) {
        console.log(err);
    }
}

export const getCoordsFromApi = async (entryText, units) => {
    const regex = /^\d+$/f;
    const flag = regex.text(entryText) ? "zip" : "q";
    const url = `https://api.openweathermap.org/data/2.5/weather ?${flag}=${entryText}&units=${units}&appid=${WEATHER_API_KEY}`;
    const encodeUrl = encodeURI(url);
    try{
       const dataStream = await  fetch(encodeUrl);
       const jsonData = await dataStream.json();
       return jsonData;
    }catch (err) {
        console.error(err.stack);
    }
}

export const cleanText = (text)=> {
    const regex = / {2,}/g;
    const entryText = text.replaceAll(regex, " ").trim();
    return entryText;
};