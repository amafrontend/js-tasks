import {test} from "./tester"

/** ЗАДАЧА:
 * В тексте нужно провалидировать,
 * что все скобки корректно расставлены.
 */

/** Примеры:
validateparenthesis('(((())()))') => true
validateparenthesis('())') => false
validateparenthesis(')(') => false
*/

//Решение со счетчиком
function validateparenthesis1(text) {
  let parenthesisCount = 0;

  for (const character of text) {
    if (character === '(') {
      parenthesisCount++;
    }

    if (character === ')') {
      if (parenthesisCount === 0) {
        return false;
      }

      parenthesisCount--;
    }
  }

  return parenthesisCount === 0;
}

// Решение со вспомогательным массивом (лучше со счетчиком)
function validateparenthesis2(text) {
  const stack = []; // складирует только '('

  for (const character of text) {
    if (character === '(') {
      stack.push(character)
    }

    if (character === ')') {
      if (!stack.length) {
        return false;
      }

      stack.pop();
    }
  }

  return !stack.length;
}

test(validateparenthesis2('(((())()))'), true);
test(validateparenthesis2('())'), false);
test(validateparenthesis2(')('), false);


/** Примеры 2:
 validateparenthesis('(((())()))') => true
 validateparenthesis('())') => false
 validateparenthesis(')(') => false
 validateparenthesis('([])') => true
 validateparenthesis('([)]') => false
 */
 
 const parantesisPairs = {
   '(': ')',
   '[': ']',
 };
 
 const openingParenthesis = new Set(Object.keys(parentesisPairs));
 const closingParenthesis = new Set(Object.values(parentesisPairs));
 
 // Решение со стеком под работу с различными скобками
 function validateparenthesis3(text) {
   const stack = [];
 
   for (const character of text) {
     if (openingParenthesis.has(character)) {
       stack.push(character)
     }
 
     if (closingParenthesis.has(character)) {
       if (!stack.length) {
         return false;
       }
 
       const parenthesis = stack.pop();
 
       if (character !== parentesisPairs[parenthesis]) { // Если наша скобка — не закрывающая текущей открывающей
         return false;
       }
     }
   }
 
   return !stack.length;
 }
 
 test(validateparenthesis3('(((())()))'), true);
 test(validateparenthesis3('())'), false);
 test(validateparenthesis3(')('), false);
 test(validateparenthesis3('([])'), true);
 test(validateparenthesis3('([)]'), false);
