// create a function to test to see if a word is a palindrome
function checkPalindrome(wordToTest){
    // remove all of the spaces in the string that was passed in
    var cleanedWord = wordToTest.replace(/\s/g, "").toLowerCase();

    // take our cleaned word with no spaces and all lower case and reverse it
    var reversedWord = cleanedWord.split("").reverse().join("");

    // if the cleaned & reversed words are the same, the function returns true
    // if they are different, the function returns false
    return cleanedWord == reversedWord;
}

/*
console.log("radar=" + checkPalindrome("radar"));
console.log("tag=" + checkPalindrome("tag"));
console.log("A man a plan a canal Panama=" + checkPalindrome("A man a plan a canal Panama"));
*/

function runPalindromeChecker(){
    // bContinue will track if the user wantes to keep entering words
    var bContinue = true;
    
    // loop to keep running the code for as long as the user wants
    do {
        // get a word from the user
        var userInput = prompt("Enter a word to test if it is a palindrome: ");

        // if the user pressed "cancel", then userInput will be null, so exit the loop
        if (userInput == null){
            break;
        }

        // test the variable that the user entered
        var isPalindrome = checkPalindrome(userInput);
    
        // show the user a message based on the true/false value returned from the function
        // if isPalindrome is true, the if statement will run
        if (isPalindrome){ // the same as if (isPalindrome == true){
            alert(userInput + " is a palindrome!");
        }
        else { // if not a palindrome
            alert(userInput + " is NOT a palindrome!");
        }
    
        // ask the user if they want to continue testing palindromes
        var answer = prompt("Do you want to continue? (y/n)");
    
        // if the user pressed "cancel", then answer will be null, so exit the loop
        if (answer == null){
            break;
        }

        // test to see if they entered n
        if (answer.toLowerCase() == "n"){
            bContinue = false; // change bContinue to false so we can exit out of the loop
        }
        
    } while(bContinue); // while bContinue is true, keep running the loop
}
