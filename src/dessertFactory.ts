import dessert from './deseeert'

// const dessertFactory = function(){}

// dessertFactory.produce = function(type) {
//     switch (type){
//         case 'Red bean burning':
//             return new dessert('Red bean burning')
//         case 'Tiramisu':
//             return new dessert('Tiramisu')
//         default:
//             throw new Error('please choose a dessert type')
//     }
// }

// module.exports = dessertFactory

export default class dessertFactory {
    static produce(type:string){
        switch(type){
            case 'Red bean burning':
                return new dessert('Red bean burning')
            case 'Tiramisu':
                return new dessert('Tiramisu')
            default:
                throw new Error('please choose a dessert type')
        }
    }
}
