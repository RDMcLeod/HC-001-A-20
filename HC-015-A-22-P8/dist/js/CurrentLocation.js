export default class CurrentLocation{
    constructor () {
        this._name = "Current Location";
        this._lat = null;
        this._lon = null;
        this._unit = "imperial";
    }
    getName() {
        return this._name;
    }
    stName(name) {
        return name._name;
    }
    getLat() {
        return this._lat;
    }
    setLat(lat) {
        this._lat = lat;
    }
    getLon() {
        return this._lon;
    }
    setLon(lon) {
        this._lon = lon;
    }
    

    getUnit() {
        return this._unit;
  }

    setUnit(unit) {
        this._unit = unit;
  }

    toggleUnit() {
        this._unit = this._unit === "imperial" ? "metric" : "imperial";
  }
}
