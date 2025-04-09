const student = {
    fullname: "Mamah Ikechukwu Collins",
    age: 22,
    major: "Computer Science",
    update: function(upgradeMajor) {
        this.major = upgradeMajor;
        }
    }
 student.update('art')
console.log(student)