import { City } from './cities&communities.js';
// import { exportAllDeclaration } from '@babel/types';


// 

test("checking general properties", () => {
    const calgary = new City("Calgary", 51.04, -114.07, 1285711);
    const airdrie = new City("Airdrie", 51.29, -114.01, 70564);
    const canmore = new City("Canmore", 51.09, -115.34, 13992);
    const rainbowlake = new City("Rainbow Lake", 58.30, -119.22, 795);
    const beavermines = new City("Beaver Mines", 49.27, -114.11, 82)
    const mardeplata = new City("Mar de Plata", -38, -57.33, 614350)
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

// test("checking show(), string of properties", () => {

// })