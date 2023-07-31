function TanpaSort(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return { lowest: "", highest: "", average: "" };
    }
  
    let lowest = arr[0];
    let highest = arr[0];
    let sum = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      sum += arr[i];
  
      if (arr[i] < lowest) {
        lowest = arr[i];
      }
  
      if (arr[i] > highest) {
        highest = arr[i];
      }
    }
  
    let average = sum / arr.length;
  
    return { lowest, highest, average };
  }
  
 
  let myArray = [10, 5, 25, 20, 15];
  let statsTanpaSort = TanpaSort(myArray);
  console.log(statsTanpaSort);
  
  function splitStringIntoWords(str) {

  
    const wordsArray = [];
    let currentWord = "";
  
    for (let i = 0; i < str.length; i++) {
      const word = str[i];
  
      if (word !== " ") {
        currentWord += word;
      }
  
      if (word === " " || i === str.length - 1) {
        if (currentWord.length > 0) {
          wordsArray.push(currentWord);
          currentWord = "";
        }
      }
    }
  
    return wordsArray;
  }
  
  const inputString = "Hello World";
  const wordsArray = splitStringIntoWords(inputString);
  console.log(wordsArray);
  