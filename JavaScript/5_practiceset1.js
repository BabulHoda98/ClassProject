// 1.Create a variable of type string and try to add a number to item. 
let a="Hoda"
let b=6
console.log(a + b);
// 2.Use type of operater to find the datatype of string in last question
let x="Hoda"
let y=6
console.log(typeof (x+y));
// 3.Create a const object in javascritp can you change it to hold a number later?
const a1={
    name:"Hoda",
    section:1,
    isPrinciple:false
}
// a1="Hoda"
// a1=45
// a1={}
// 4.Try to add a new key to the const object in Problem 3 were you able to do it?
a1["friend"]="Shubham"
a1["name"]="Lovish"
console.log(a1)
// 5.Write a JS program to create a word-meaning dictionary of 5 words. 
const dict={
    appreciate:"recognize the full worth of.",
    ataraxia:"a state of freedom from emotional disturbace and anxiety",
    yakka:"work,especially hard work."
}
console.log(dict['yakka'])
console.log(dict['ataraxia'])


