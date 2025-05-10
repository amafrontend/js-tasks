const getRandomHexColor = () => {
  let color = '#';

  for (let i = 0; i <= 6; i++) {
    color += Math.floor(Math.random() * 16).toString(16).toUpperCase();
  }

  return color;
}


// ( ) { } [ ]
// ( 
// [ ( ) ]
// [ ( 
// [(]

const isValid = (s) => {
  const bracketsCollection = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    }

    if (bracketsCollection.has(s[i])) { // ] => [
      const lastBracket = stack.pop(); // (

      if (bracketsCollection.get(s[i]) !== s[i]) { // ( !== [
        return false;
      }
    }

  }

  return true;
}
