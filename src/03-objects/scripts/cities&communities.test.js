import { City, Community } from './scripts/cities&communities.js'
import { exportAllDeclaration } from '@babel/types';


// const airdrie = new City("Airdrie", 51.29, -114.01, 70564);
// const canmore = new City("Canmore", 51.09, -115.34, 13992);
// const rainbowlake = new City("Rainbow Lake", 58.30, -119.22, 795);
// const beavermines = new City("Beaver Mines", 49.27, -114.11, 82)

test("checking general properties", () => {
    const calgary = new City("Calgary", 51.04, -114.07, 1285711);
    expect(calgary.name).toEqual("Calgary");
    expect(calgary.population).toEqual(1285711);
    expect(calgary.show).toEqual("Name: Calgary\nLatitude: 51.04\nLongitude: -114.07\nPopulation: 1285711")
});

test("checking show(), string of properties", () => {

})