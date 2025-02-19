function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // Find the middle index

        if (arr[mid] === target) {
            return mid; // Target found, return index
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return -1; // Target not found
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11, 15, 18];
const target = 7;

const result = binarySearch(arr, target);

if (result !== -1) {
    console.log(`Element found at index ${result}`);
} else {
    console.log("Element not found");
}
