function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) {
            return mid;
        }

        // If the left half is sorted
        if (arr[left] <= arr[mid]) {
            // If the number is within the sorted range
            if (arr[left] <= num && num < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // If the right half is sorted
        else {
            // If the number is within the sorted range
            if (arr[mid] < num && num <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}

module.exports = findRotatedIndex