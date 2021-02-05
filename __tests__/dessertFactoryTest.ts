// const dessertFactory = require('../src/dessertFactory')

// describe('test dessertFactory feature', () => {
//     test("produce all dessert", () => {
//         const dessertType = ['Red bean burning', 'Tiramisu'];
//         expect(dessertFactory.produce(dessertType[0]).enjoy()).toBe("Enjoy the Red bean burning");
//         expect(dessertFactory.produce(dessertType[1]).enjoy()).toBe('Enjoy the Tiramisu')
//         expect(()=>{dessertFactory.produce('Luckin Coffee')}).toThrow('please choose a dessert type')
//     })
// });

import dessertFactory from '../src/dessertFactory'

describe('test dessertFactory feature',()=>{
    test('produce all dessert',()=>{
        const dessertType = ['Red bean burning','Tiramisu']
        expect(dessertFactory.produce(dessertType[0]).enjoy()).toBe('Enjoy the Red bean burning')
        expect(dessertFactory.produce(dessertType[1]).enjoy()).toBe('Enjoy the Tiramisu')
        expect(()=>{dessertFactory.produce('Luckin Coffee')}).toThrow('please choose a dessert type')
    })
})