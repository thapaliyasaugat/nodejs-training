// unit
// integration
// e2e

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


})
