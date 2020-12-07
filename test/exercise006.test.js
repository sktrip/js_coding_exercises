const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    // createMatrix,
    // areWeCovered
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
    test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
        expect(sumMultiples([5, 3, 15, 9, 1, 10])).toBe(42);
        expect(sumMultiples([5, 22, 650, 122, 67, 23, 41, 1])).toBe(655);
    });

    test("returns the sum of any numbers which are a multiple of 3", () => {
        expect(sumMultiples([3, 6, 7, 8, 1, 9])).toBe(18);
    });

    test("returns 0 if the array does not contain multiples of 3 or 5", () => {
        expect(sumMultiples([1, 2, 4, 8, 1, 7])).toBe(0);
    });


    describe("isValidDNA", () => {
        test("returns true, if the DNA string contains letters C/G/T/A only", () => {
            expect(isValidDNA("CGTACTGAT")).toEqual(true);
        });

        test("returns false, if the DNA string contains letters other than C/G/T/A ", () => {
            expect(isValidDNA("FDGAT")).toEqual(false);
        });
        test("returns false, if the DNA string is null ", () => {
            expect(isValidDNA("")).toEqual(false);
        });
    });

    describe("getComplementaryDNA", () => {
        test("returns complementary DNA string :complementary pairs as T->A , G->C", () => {
            expect(getComplementaryDNA('ACTG')).toBe('TGAC');
            expect(getComplementaryDNA('TGACA')).toBe('ACTGT');
        });

        describe("isItPrime", () => {
            test("returns true if the given input is a prime number", () => {
                expect(isItPrime(2)).toEqual(true);
            });
        });

        describe("isItPrime", () => {
            test("returns false if the given input is not a prime number", () => {
                expect(isItPrime(4)).toEqual(false);
            });
        });

    });
});     
