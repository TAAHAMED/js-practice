const tinderUser = new Object() //Singelton Object

//const tinderUser = {} //non Singelton Object

tinderUser.id = "12abc"
tinderUser.name = "Talib"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "t@gmail.com",
    fullname:{
        userfullname: {
            firstname : "Talib",
            lastname : "Ahamed"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
    id:1,
    email:"talib@gmail.com"
   },
   {
    id:1,
    email:"talib@gmail.com"
   },
   {
    id:1,
    email:"talib@gmail.com"
   },
   {
    id:1,
    email:"talib@gmail.com"
   }
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(Object.hasOwnProperty('isLogged'));


