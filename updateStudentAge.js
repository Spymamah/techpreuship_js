function updateStudentAge(students, studentName, newAge){
    
    
    
    if(newAge >= 7){
        
        tube.Age = newAge
        console.log("The new age is...", tube.Age)
    }else{
        console.log("The new age is invalid")
    }

}let tube = {surName: "ikechukwu",
    name: "collins",
    Age: 7}
updateStudentAge(tube, "val", 9)
updateStudentAge(tube, "chig", 7)
updateStudentAge(tube, "mine", 10)