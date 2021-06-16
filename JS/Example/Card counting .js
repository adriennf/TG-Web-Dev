// Blackjack. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
// +1	2, 3, 4, 5, 6
// 0	7, 8, 9
// -1	10, 'J', 'Q', 'K', 'A'
// function cc(card) {
    
//     var regex = /[JQKA]/;
//     if (card > 1 && card < 7) {
//       count++;
//     } else if (card === 10 || regex.test(card)) {
//       count--;
//     }
  
//     if (count > 0) return count + " Bet";
//     return count + " Hold";
  
//   }
// Code Explanation
// The function first evaluates if the condition card is a value greater than 1 and lower than 7, in which case it increments count by one.
// Then if the card is 10 or higher it decrements count by one.
// The variable regex is a regular expression 955 representing values (letters) for the higher cards.
// The else statement checks those values with the || (logical OR) operator; first for 10 and then for any string that matches the regular expression using String.match() 254.

let count = 0;

function cc(card) {
  
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }

// cc(2); cc(3); cc(7); cc('K'); cc('A');