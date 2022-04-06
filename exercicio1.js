
// PRIMEIRA POSSIBILIDADE
// Com parametro de entrada

const sumMult = (number)=>{
    let arr =[]
    for(let i = 1 ; i < number ; i++ ){
        if(i % 3 == 0 | i % 5 == 0 ){
            arr.push(i)
        }
    }
    return arr.reduce((acc,cur)=>acc+cur)
}
console.log(sumMult(10))


/*---------------------------------------------------------------------------------------- */

//SEGUNDA POSSIBILIDADE
//Sem parametro de entrada
const MIL = 1000

const sumMultV2 = ()=>{
    let arr =[]
    for(let i = 1 ; i < MIL ; i++ ){
        if(i % 3 == 0 | i % 5 == 0 ){
            arr.push(i)
        }
    }
    return arr.reduce((acc,cur)=>acc+cur)
}
console.log(sumMultV2())