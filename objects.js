 let user = {
    name: 'victor',
    age: 18,
    addresses:{
        email: "email@gmail.com",
        phone: "09092443837",
        home: "emene"},
        favoriteColor: ["blue", "red", "green", "yellow"]
    }
let User2 = user
let user3 ={...user}
console.log(User2.age)
console.log(user3.age)

user.age = 34

console.log(User2.age)
console.log(user3.age)
console.log(Object.keys(user))

let properties = Object.keys(user)
console.log("age includes", properties.includes('age'))
console.log(Object.values(user))
console.log(Object.entries(user))