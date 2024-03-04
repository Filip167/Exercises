function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // If the array is already sorted, return 0
        if (arr[left] <= arr[right]) {
            return left;
        }

        let mid = Math.floor((left + right) / 2);
        let next = (mid + 1) % arr.length; // Calculate the next element index

        // If the next element is smaller than the current element, it is the rotation point
        if (arr[mid] > arr[next]) {
            return next;
        }

        // Decide whether to go left or right
        if (arr[mid] >= arr[left]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return 0; // If the array is not rotated
}

module.exports = findRotationCount