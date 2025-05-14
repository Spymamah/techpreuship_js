

let user = {
    name : "Alpha",
    village: "Emene",
    checkAge: () => {
        console.log("Age is checked");

    },
    numbers:[1,2,3,4,5,6],
    addresss: {
        street: "Emene",
        city: "Abuja",
        state: "FCT"
    }


}



let user2 = JSON.stringify(user)

let user3 = JSON.parse(user2)

// console.log('user2 name : ', user2.name)

// user.name = "Beta"

console.log('user2',user2)

console.log('user3 ',user3)


// let properties = Object.keys(user)

// console.log('keys : ', properties.includes('name'))


// let values = Object.values(user)

// console.log('values : ', values.includes('Alpha'))

// let enteries  = Object.entries(user)

// console.log(enteries)




