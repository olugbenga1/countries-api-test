import { allCountries, countriesByRegion, countryByName } from "../index";

describe("fetch all countries using axios", () => {
  it("should fetch all countries", async () => {
    const result = await allCountries();
    expect(result.length).toEqual(250);
    expect(result).toBeDefined;
    expect(result).toBeInstanceOf(Array);
  });
});

describe("fetch countries by region", () => {
  it("should fetch all countries by region", async () => {
    const result = await countriesByRegion();
    expect(result.length).toEqual(53);
  });
});

describe("fetch country by name", () => {
  it("should fetch a country by name", async () => {
    const result = await countryByName();
    expect(result).toBeTruthy;
  });
});
