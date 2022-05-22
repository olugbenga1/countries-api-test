"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe("fetch all countries using axios", () => {
    it("should fetch all countries", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, index_1.allCountries)();
        expect(result.length).toEqual(250);
        expect(result).toBeDefined;
        expect(result).toBeInstanceOf(Array);
    }));
});
describe("fetch countries by region", () => {
    it("should fetch all countries by region", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, index_1.countriesByRegion)();
        expect(result.length).toEqual(53);
    }));
});
describe("fetch country by name", () => {
    it("should fetch a country by name", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, index_1.countryByName)();
        expect(result).toBeTruthy;
    }));
});
