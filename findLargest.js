function findLargest(a, b, c) {
    let largest = a; 

    if (b > largest) {
        largest = b;
    }

    if (c > largest) {
        largest = c; // Update if 'c' is larger
    }

    return largest;
}

// Example usage:
console.log(findLargest(10, 25, 15)); // Output: 25
