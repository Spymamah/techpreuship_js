let data = "This is a sentence";
console.log(data.length)
console.log(data)


// console.log(data[data.length-1])
// console.log(data.toLocaleLowerCase())
// console.log(data.toLocaleUpperCase())
// console.log(data.charAt(0))
// console.log(data.indexOf("e"))

let fname = "ikechukwu"
let lname = "mamah"
// let fullName = fname + lname
// console.log(fullName)

let both = fname.concat(" ", lname)
console.log(both)

fullname = `${fname} ${lname}`

function sum(value){
    let sum = 0;

    for (let x = 0; x < value; x++){

        sum += value;

        
        
        }
        
        console.log(sum)
        return sum;
}
 
console.log(sum(6))