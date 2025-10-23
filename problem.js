/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/

//My Notes/though process. First you need to create the function titled "passwordCheck", wich will take the parameters password and input. My next approach would be setting a value for the password such as "let password = "kitty" and other vraibles for forgot and reset.
//then I need to create an if,else if, and else for the possible outcomes of password inputs, and write out the conditions, followed by console logging the messages that will be outputed for diffirent inputs.
//After the function is completed i need to invoke them by console logging the function (outside of the function) with diffirent inputs in order to output each possible output.
//for the CHALLENGE my first approach would be setting another else if condition using  || and && to set if forgot or reset is inputed. Then another else if setting the conditon that if password <5 characters, then log out the messages for both., and invoke them


let correctPassword = "kitty";
let dontRemember = "forgot";
let accountReset = "reset";



function passwordCheck(password,input) {
    if (password === correctPassword && input === correctPassword) {
        console.log("Acess Granted!");
    } else if (password !== correctPassword && input !== correctPassword) {
        console.log("Access Denied!");
    } else if (input === dontRemember) {
        console.log("Here is a hint, home pet");
    } else if (input === accountReset) {
        console.log("Let's reset your account");
    } else if (password && input === dontRemember || accountReset) {
        console.log("This password you set should not be used because it glitches the system");
    } else if (password && input < 5) {
        console.log("Your password is too short!");
    } else {console.log("Enter a correct input")}

};

console.log(passwordCheck("kitty","kitty")); 
console.log(passwordCheck("monkey","monkey"));
console.log(passwordCheck("I dont remember","forgot"));
console.log(passwordCheck("I don't remember", "reset"));
console.log(passwordCheck("cat","cat"));
