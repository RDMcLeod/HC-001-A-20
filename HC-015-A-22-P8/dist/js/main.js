import {setLocationObject, getHomeLocation, getCoordsFromApi, cleanText} from "./dataFunctions.js";
import {addSpinner, displayError, displayApiError, updateScreenReaderConfirmation} from "./domFunctions.js";
import CurrentLocation from "./CurrentLocation.js";
const currentLoc = new CurrentLocation();

const initApp = () =>{
    //add listeners
    const geoButton = document.getElementById("getLocation");
    geoButton.addEventListener("click", getGeoWeather);
    const homeButton = document.getElementById("home");
    homeButton.addEventListener("click", loadWeather);
    const saveButton = document.getElementById("saveLocation");
    saveButton.addEventListener("click", saveLocation);
    const unitButton = document.getElementById("unit");
    unitButton.addEventListener("click", setUnitPref);
    const refreshButton = document.getElementById("refresh");
    refreshButton.addEventListener("click", refreshWeather);
    const locationEntry = document.getElementById("searchBar__form");
    locationEntry.addEventListener("submit", submitNewLocation);
   
    // set up
    setPlaceholderText();
    //load weather
    loadweather();
};
document.addEventListener(DOMcontentLoaded, initApp);

const getGeoWeather = (event) => {
    if (event) {
        if (event.type === "click") {
          const mapIcon = document.querySelector(".fa-map-marker-alt");
          addSpinner(mapIcon);
        }
    }
    if (!navigator.geolocation) geoError();
    navigator.geolocation.getCurrentPosition(geoSucess, geoError);
};
const geoError = (errObj) => {
    const errMsg = errObj.message ? errObj.message : "GeoLocation not supported";
    displayError(errMsg, errMsg);
};
const geoSuccess = (position) => {
    const mycoordsObj = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
        name:`Lat:${position.coords.latitude} Long:${position.coords.longitude}`
    };
    setLocationObject(currentLoc, myCoordObj);
    updateDataAndDisplay(currentLoc);
};
const loadweather = (event) => {
    const savedLocation = getHomeLocation();
    if (!savedLocation && !event) return getGeoWeather();
    if (!savedLocation && event.type === "click") {
        displayError(
            "No Home Location Saved.",
            "Sorry. Please save Your home location first"
        );
    } else if (savedLocation && !event){
        displayHomeLocationWeather(savedLocation);
    } else {
        const homeIcon = document.querySelector(".fa-home");
        addSpinner(homeIcon);
        displayHomeLocationWeather(savedLocation);
    };
};
const displayHomeLocationWeather = (home) => {
    if (typeof home === "string") {
        const locationJson = JSON.parse(home);
        const myCoordsObj = {
            lat: locationJson.lat,
            lon: locationJson.lon,
            name: locationJson.name,
            unit: locationJson.unit
        };
        setLocationObject(currentLoc, myCoordsObj);
        updateDataAndDisplay(currentLoc);
       
    };
    
};
const savedLocation = ()=> {
    if (currentLoc.getLat() && currentLoc.getLon()) {
        const saveIcon = document.querySelector(".fa-save");
        addSpinner (saveIcon);
        const location = {
            name: currentLoc.getName(),
            lat: currentLoc.getLat(),
            lon: currentLoc.getLon(),
            unit: currentLoc.getUnit()

        };
        localStorage.setItem ("defaultWeatherLocation", JSON,stringfy(location));
        updateScreenReaderConfirmation(`Saved ${currentLoc,getName()} as home location.`)
    };
};
const setUnitPref = ()=>{
    const unitIcon = document.querySelector(".fa-chart-bar");
    addSpinner(unitIcon);
    currentLoc.toggleUnit();
    updateDataAndDisplay(currentLoc);
};
const  refreshWeather = ()=> {
    const refreshIcon = document.querySelector(".fa-sync-alt");
    addSpinner(refreshIcon);
    updateDataAndDisplay(currentLoc);
};
const submitNewLocation = async (event) => {
    event.preventDefaullt();
    const text = document.getElementById("searchBar__text").value;
    const entryText = cleanText(text);
    if (!entryText.length) return;
    const locationIcon = document.querySelector(".fa-search")
    addSpinner(locationIcon);
    const coordsData = await getCoordsFromApi(entryText, currentLoc.getUnit());
    if (coordsData) {
        if (coordsData.cod === 200){
           const myCoordsObj = {
               lat: coordsdata.coord.lat,
               lon: coordsdata.coord.lon,
               name: coordsData.sys.country ? `${coordsData.name}, ${coordsData.sys.country}`: coordsdata.name
           };
        setLocationObject(currentLoc, myCoordsObj);
        updateDataAndDisplay(currentLoc);
    } else {
        displayApiError(coordsdata);
    }
 } else {
    displayError ("Connection Error",  "Connection Error");
 }
}

const updateDataAndDisplay = async (location) => {
    console.log(locationObj);

    //const weatherjson = await getGeoWeatherFromCoords(locationObj);
    //if(weatherJson) updateDataAndDisplay(weatherJson, locationObj);
};