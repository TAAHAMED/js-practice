function addTwoNumbers(number1, number2){

    // console.log(number1+number2);
    return number1+number2
    
}

const result = addTwoNumbers(3,4)

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter username");
        return 
        
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Talib"));
console.log(loginUserMessage());
