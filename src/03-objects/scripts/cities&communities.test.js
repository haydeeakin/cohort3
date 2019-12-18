import { City, Community } from './cities&communities.js';

const calgary = new City("Calgary", 51.04, -114.07, 1285711);
const airdrie = new City("Airdrie", 51.29, -114.01, 70564);
const canmore = new City("Canmore", 51.09, -115.34, 13992);
const rainbowlake = new City("Rainbow Lake", 58.30, -119.22, 795);
const beavermines = new City("Beaver Mines", 49.27, -114.11, 82);
const mardeplata = new City("Mar de Plata", -38, -57.33, 614350);
const newCity = new Community();

test("checking cities properties", () => {
    expect(calgary.name).toEqual("Calgary");
    expect(calgary.population).toEqual(1285711);
    expect(calgary.show()).toBe("Name: Calgary Latitude: 51.04 Longitude: -114.07 Population: 1285711");
    expect(calgary.moveIn(1000)).toEqual(1286711);
    expect(calgary.moveOut(1000)).toEqual(1285711);
    expect(calgary.howBig()).toBe("City");
    expect(calgary.whichHemisphere()).toBe("Northern Hemisphere")
    expect(airdrie.howBig()).toBe("Large town");
    expect(canmore.howBig()).toBe("Town");
    expect(rainbowlake.howBig()).toBe("Village");
    expect(beavermines.howBig()).toBe("Hamlet");
    expect(mardeplata.whichHemisphere()).toBe("Southern Hemisphere");

});

test("checking communities properties", () => {
    newCity.createCity("Morelia", 19.46, -101.11, 784776);
    newCity.createCity("Mombasa", -4.03, 39.40, 1208333);
    newCity.createCity("Cambridge", 52.12, 0.07, 125758);
    expect(newCity.allCities.length).toBe(3);
    expect(newCity.allCities[0].name).toBe(("Morelia"));
    expect(newCity.allCities[0].population).toEqual(784776);
    expect(newCity.allCities[0].howBig()).toBe("City");
    expect(newCity.allCities[0].moveOut(710000)).toEqual(74776)
    expect(newCity.allCities[0].howBig()).toBe("Large town");
    expect(newCity.allCities[1].name).toBe("Mombasa");
    expect(newCity.allCities[1].population).toEqual(1208333);
    expect(newCity.allCities[1].whichHemisphere()).toBe("Southern Hemisphere");
    expect(newCity.getTotalPop()).toEqual(1408867);
    expect(newCity.highestPop()).toBe("Mombasa");
    expect(newCity.mostSouthern()).toBe("Mombasa");
    expect(newCity.mostNorthern()).toBe("Cambridge");
    newCity.deleteCity("Morelia");
    expect(newCity.allCities.length).toBe(2);
    
});


// test("checking show(), string of properties", () => {

// })