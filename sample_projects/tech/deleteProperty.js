let school = {
    name: "Springfield Elementary",
    principal: "Principal Skinner",
    grades: ["1st", "2nd", "3rd", "4th"],
   
}

function deleteProperty(obj, key){
    delete obj[key];
    return obj
}
function update(key){
    school[key] = "1ist";
    return school;
}
// function addProperty(obj, key, value){
//     obj[key] = value;

// }
// let you = school.dlete(school, "grades");
// console.log(you)
let you = deleteProperty(school, "grades");
console.log(you)
let me = update("grades");
console.log(me)