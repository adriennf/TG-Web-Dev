// means that they cannot be altered once created
// Note that this does not mean that myStr cannot be changed, just that the individual characters of a string literal cannot be changed. The only way to change myStr would be to assign it with a new string
var myStr = "Jello World";
// myStr[0] = "H";  cannot change the value of myStr to Hello, because the contents of myStr cannot be altered.
myStr = "Hello World";