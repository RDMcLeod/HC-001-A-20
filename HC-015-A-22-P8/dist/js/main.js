import {addSpinner} from "./domFunctions.js";
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


    // load weather
}
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
}