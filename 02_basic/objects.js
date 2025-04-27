//Singelton
//Object.create

//object literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "Talib",
    "full name":"Talib Ahamed",
    mySym: "myKey1",
     age : 25,
    location : "Kolkata",
    email : "talib@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(typeof mySym);

// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user");
    
}
Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());







