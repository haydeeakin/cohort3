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
        if (this.latitude = 0) return "Equator";
    }
};

class Community {
    constructor() {
        this.cities = [];
    }

    createCity()
}

export { City };