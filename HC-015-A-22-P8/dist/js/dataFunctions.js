export const setLocationObject = (locationObj, coordsObj) => {
    const {lat, lon, name} = coordsObj;
    locationObj,setLat(lat);
    locationObj,setLon(lon);
    locationObj,setName(name);
    if (unit) {
        locationObj,setUnit(Unit);
    }
}

export const getHomeLocation = () => {
    return localStorage.getItem("defaultWeatherLocation");
}