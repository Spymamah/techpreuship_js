let userAge;
let eligibilty;
let houseLimit = 22;

let userOne = {
    name: "John Doe",
    age: 35,
    gender: "male",
    acctBal: 300
}
let userTwo = {
    name: "Jane Smith",
    age: 20,
    gender: "female",
    acctBal: 20000000
}
eligibility = userTwo.age >= houseLimit;
console.log(`${userOne.name} is eligible for the house purchase: ${eligibility}`);
if(eligibility){
    console.log('Block A')
    let unitDepPrice = 1000
    if (userOne.acctBal > unitDepPrice *3){
        console.log(`userOne purchase 3 bottle of desperados`);
    }else{
        console.log(`userOne did not purchase 3 bottles of desperados as their account bal is less`)
    }
    
    console.log(`Eligibility is ${eligibility}`);
    console.log(`${userOne.name} is eligible for the house purchase: ${eligibility}`);
    console.log(`userOne purchased 9 bottles of Desperado`
    );
}else{
    console.log('Block B')
    console.log(`Eligibility is ${eligibility}`);
    console.log(`${userOne.name} is not eligible for the house purchase ${houseLimit}`);
}

let menu ='yam'

switch(menu){
    case 'rice':
        console.log('rice is good')
        break;
    case 'bean':
        console.log('beans is a staple dish')
        break;
    case 'Noodles':
        console.log('noodles is a good dish')
    case 'Abacha':
        console.log('Abacha is a traditional')
        break;
    case 'yam':
        console.log('Yam is a popular staple in many Asia')
        break;
    default:
    console.log('sorry, that dish is not on our menu')

}

// a++

// ++a

let color = ['black', 'white', 'red', 'green', 'blue']

for(let x = 0; x < color.length; x++){
    console.log(color[x])
}

let counter = 0;
while(counter < 100){
    console.log("hello world")
    counter++
}
// for some apps when you first log in will let u use the app after some time they will use while loop to log you out
// do{
//     console.log('hello world')
// }while(false)


    let paymentValue = false

    do{
        console.log('hello world')

        if(!paymentValue){
            let res = 'yes'
            if(res === 'yes'){
                paymentValue = true
                break;
        }}
    }while(paymentValue)

        let userNum = [[1,2,3,4],[6,7,8,9],[10,11,12,13]]
        for (let x =0; x < userNum.length; x++){
            for (let y = 0; y < userNum[x].length; y++){
                console.log(userNum[x][y])
        }}

        function add(value){
            let sum = 0;
            for (let x = 0; x < value; x++){
                sum += value;
                }
               
                return sum;
            }
                
        console.log(add(10)) 
            
    