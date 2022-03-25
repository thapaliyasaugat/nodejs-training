// unit
// integration
// e2e

import { Request, Response } from "express";
import userController from "../src/controller/user.controller";

function add(a: number, b: number) {
    return a + b;
}
function asyncReturn(): Promise<boolean> {
    return Promise.resolve(true);
}

function thrErr() {
    throw new Error("error");
}

beforeAll(() => {
    console.log("run before all the blocks")
})

beforeEach(() => {
    console.log("after each block")
})

afterAll(() => {
    console.log("run after all the blocks")
})

// describe.only('Test Calculation', () => {
// describe.skip('Test Calculation', () => {
describe('Test Calculation', () => {
    it('should add values and return result', async () => {
        expect(add(2, 3)).toBe(5);
        expect(add(2, 3)).toEqual(5);
        expect({ a: add(2, 3) }).toEqual({ a: 5 });
        expect(true).toBeTruthy();
        expect(null).toBeNull();

        asyncReturn().then((result) => {
            expect(result).toBeTruthy();
        })

        try {
            const result = await asyncReturn()
            expect(result).toBeTruthy();
        } catch (error) {
        }

        expect(() => thrErr()).toThrow("error");

        expect(['a', 'b', 'c']).toContain('a');
    })



    // it.only('test', () => {
    // it.skip('test', () => {
    it('test', () => {
        expect(true).toBeTruthy();
    })

    // TDD : Test Driven Development- first write tests

    //steps in testing
    // arrange
    // act
    // assert


    it("mocking functions", () => {
        //arrange
        const mockAdd = jest.fn((a, b) => 'addition');
        //act
        const result = mockAdd(1, 2);
        //assert
        expect(result).toBe('addition');
        // expect(result).toBeUndefined();
        expect(mockAdd(1, 2)).toHaveBeenCalled();
        // expect(mockAdd).toHaveBeenCalledTimes(1);
        expect(mockAdd).toHaveBeenCalledWith(1);

        // const  mockAdd= jest.fn();
        // const result = mockAdd();
        // expect(result).toBeUndefined();

    })



    it("mocking implementation functions", () => {
        //arrange
        const mockAdd = jest.fn().mockImplementation((a, b) => 'addition');
        //act
        const result = mockAdd(1, 2);
        //assert
        expect(result).toBe('addition');
        // expect(result).toBeUndefined();
        expect(mockAdd(1, 2)).toHaveBeenCalled();
        // expect(mockAdd).toHaveBeenCalledTimes(1);
        expect(mockAdd).toHaveBeenCalledWith(1);

    })


    it.only("mocking only return value", () => {
        //arrange
        const mockAdd = jest.fn()
        mockAdd.mockReturnValue('addition');
        //act
        expect(mockAdd(1)).toBe('addition');
        //assert
        expect(mockAdd).toHaveBeenCalled();
        expect(mockAdd).toHaveBeenCalledWith(1);
        expect(mockAdd).toHaveBeenCalledTimes(1);

    })


})
