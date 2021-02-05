// const dessert = function(name){
//     this.name = name
// }

// dessert.prototype = {
//     enjoy:function(){
//         return 'Enjoy the ' + this.name
//     }
// }

// module.exports = dessert    

export default class dessert {
    name:string;
    static comment:string[] = []

    constructor(name:string){
        this.name = name
    }

    enjoy(){
        return 'Enjoy the ' + this.name
    }

    static comments(message:string){
        dessert.comment.push(message)
    }
    
}
