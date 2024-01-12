1. ([1,2,3,4])

2. "ref"

3.  0: {Array(3) => true}
    1: {Array(3) => false}

4. function hasDuplicate(arr) {
    return new Set(arr).size !== arr.length;
}

5. function vowelCount(str) {
    const vowels = 'aeiou';
    const result = new Map();

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            
            result.set(char, (result.get(char) || 0) + 1);
        }
    }

    return result;
}

