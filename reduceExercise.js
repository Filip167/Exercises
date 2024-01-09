function extractValue(arr, key) {
    const extractedValues = arr.reduce((result, obj) => {
      result.push(obj[key]);
      return result;
    }, []);
    return extractedValues;
  }
  


  function vowelCount(str) {
    
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const result = str.toLowerCase().split('').reduce((count, char) => {
      if (vowels.includes(char)) {
        count[char] = (count[char] || 0) + 1;
      }
      return count;
    }, {});
    return result;
  }
  

  function addKeyAndValue(arr, key, value) {
    const modifiedArray = arr.reduce((result, obj) => {
      obj[key] = value;
      result.push(obj);
      return result;
    }, []);
    return modifiedArray;
  }


  
  function partition(arr, callback) {
    const result = arr.reduce((acc, value) => {
      callback(value) ? acc[0].push(value) : acc[1].push(value);
      return acc;
    }, [[], []]);
    return result;
  }
  
  