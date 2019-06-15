function findMissingLetter(array)
{
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  alphabet += alphabet.toUpperCase();

  let startIndex = alphabet.indexOf(array[0]);
  let arrLength = startIndex + array.length;
  for ( let i=startIndex; i < arrLength; i++){  
    if(alphabet[i] !== array[i-startIndex]) { 
      return alphabet[i];
    }
  }
}