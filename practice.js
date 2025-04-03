// function binarySearch(arr, target){
//     let left = 0; let right = arr.length-1;
//     while (left <= right) {
//       let  mid = Math.floor((left + right)/2);
//       if (arr[mid] === target)
//         return mid;
//     else if (arr[mid] < target){
//         left = mid + 1;
//     }
//     else {
//         right = mid - 1;
//     }
// }
// return -1;
// }
// const arr = [1, 2, 3, 4, 5, 6,]
// const target = 5;

// const result = binarySearch(arr, target)

// if (result !== -1) {
//     console.log(`Element is present at index ${result}`);
// }else{
//     console.log(`element not present in the array`)
// }

// trying to create a school class

class school{
    year1;
    year2;
    year3;
    constructor(year1, year2, year3){

    this.year1 = year1;
    this.year2 = year2;
    this.year3 = year3;
    }
    displaySelf(){
        console.log(`year1: ${this.year1}, year2: ${this.year2}, year3: ${this.year3}`)
    }
}

myclass = new school(2018, 2019, 2020)

console.log(myclass.displaySelf())