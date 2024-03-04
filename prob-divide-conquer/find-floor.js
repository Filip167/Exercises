function findFloor(arr, x) {
    let left = -1; // Initialize left to -1 to handle the case where the floor doesn't exist
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right + 1) / 2); // Adjust mid calculation to always round up

        if (arr[mid] === x) {
            return arr[mid];
        } else if (arr[mid] < x) {
            left = mid; // Update left to search in the right half
        } else {
            right = mid - 1; // Update right to search in the left half
        }
    }

    // After the loop, left will point to the largest element smaller than or equal to x
    return left >= 0 ? arr[left] : -1; // If left is still -1, it means the floor doesn't exist
}

module.exports = findFloor