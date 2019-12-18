class City {
    constructor(name, latitude, longitude, population) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population =  population;
    };

    show() {
        return `Name: ${this.name} Latitude: ${this.latitude} Longitude: ${this.longitude} Population: ${this.population}`;
    }

    moveIn(num) {
        return this.population += Number(num);
    }
    
    moveOut(num) {
        return this.population -= Number(num);
    }

    howBig() {
        if (this.population > 100000) return "City";
        if (this.population >  20000) return "Large town";
        if (this.population > 1000) return "Town";
        if (this.population > 100) return "Village";
        if (this.population > 0) return "Hamlet";
    }

    whichHemisphere() {
        if (this.latitude < 0) return "Southern Hemisphere";
        if (this.latitude > 0) return "Northern Hemisphere";
        if (this.latitude === 0) return "Equator";
    }
};

class Community {
    constructor() {
        this.allCities = [];
    }

    createCity(name, latitude, longitude, population) {
        let newCity = new City(name, latitude, longitude, population);
        this.allCities.push(newCity);
        return newCity;
    }

    deleteCity(name) {
        this.allCities = this.allCities.filter((item) => item.name != name);
    }

    getTotalPop() {
        return this.allCities.reduce((acc, item ) => acc + item.population, 0);
    }

    highestPop() {
        this.allCities.sort((a, b) => b.population - a.population);
        return this.allCities[0].name;

    }

    mostSouthern() {
        this.allCities.sort((a, b) => a.latitude - b.latitude);
        return this.allCities[0].name;
        

    }

    mostNorthern() {
        this.allCities.sort((a, b) => b.latitude - a.latitude);
        return this.allCities[0].name;
    }
}

export { City, Community };