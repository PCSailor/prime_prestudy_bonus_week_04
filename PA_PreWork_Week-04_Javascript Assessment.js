console.log("Test Javascript Code");
/* Javascript Process Order into memory:
1)  Vars first but as undefined
2)  Functions
3)  Executable statements
4)  Function Expressions are never hoisted, treated as assignments  */
var theNumber = 1; //Global

var michelangelo = function(value){
    value = (value * 2);
    return value;
};
 /*  michelangelo(theNumber);
michelangelo(1);
1 = 1 * 2;
value = 2; //Local
The answer is 2
 */
var donatello = function(value, anotherValue){
    value = anotherValue + value;
    anotherValue = value * anotherValue;
    return anotherValue;
};
/* (donatello(theNumber, 2))
(donatello(1, 2))
1 = 2 + 1 = 3 //New Value //Local
2 = 3 * 2 = 6 //New anotherValue //Local
The answer is 6
 */

var leonardo = function(value){
    var anotherValue = value;
    value *= 4;
    theNumber = value / 2;
    return (value + anotherValue);
};
 /*  leonardo(theNumber)
leonardo(1);
anotherValue = 1
1 = 1 * 4 = 4 //New Value //Local
1 = 4 / 2 = 2 //New theNumber //Local
4 + 1 = 5
Tthe answer is 5
 */

var raphael = function(value, anotherValue, yetAnotherValue){
    value = value * anotherValue + yetAnotherValue;
    return yetAnotherValue;
};
 /*  (raphael(3, 2, theNumber)
 (raphael(3, 2, 1)
 3 = 3 * 2 + 1 = (3 * 2=6) + 1 = 7 //New Value //Local
 yetAnotherValue still = 1
 The answer is 1
 */
//In your email, tell me what the answer to this expression would be:
michelangelo(theNumber) + leonardo(theNumber);
theNumber = theNumber * 2;
/*  michelangelo(theNumber) + leonardo(theNumber);
michelangelo(2) + leonardo(5);
2 + 5 = 7
7 = 7 * 2 = 14
The answer is 14
*/
//In your email, tell me what the answer to this expression would be:
(donatello(theNumber, 2)) - (raphael(3, 2, theNumber));
 /*  (donatello(theNumber, 2)) - (raphael(3, 2, theNumber));
(donatello(6)) - (raphael(1));
The answer is 5
 */
