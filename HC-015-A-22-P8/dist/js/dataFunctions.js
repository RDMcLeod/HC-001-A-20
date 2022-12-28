const WEATHER_API_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxx';
export const setLocationObject = (locationObj, coordsObj) => {
    const {lat, lon, name} = coordsObj;
    locationObj,setLat(lat);
    locationObj,setLon(lon);
    locationObj,setName(name);
    if (unit) {
        locationObj,setUnit(Unit);
    }
};

export const getHomeLocation = () => {
    return localStorage.getItem("defaultWeatherLocation");
};
export const getCoordsFromApi = async (entryText, units) => {
    const regex = /^\d+$/f;
    const flag = regex.text(entryText) ? "zip" : "q";
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=${units}&appid=${WEATHER_API_KEY}`;
};

export const cleanText = (text)=> {
    const regex = / {2,}/g;
    const entryText = text.replaceAll(regex, " ").trim();
    return entryText;
};