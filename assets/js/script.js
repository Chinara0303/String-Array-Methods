"use strict";
//1) Sinifde yazdiqlarimin praktikasini edin

//string mehtods
let firstname = "Chinara";

// console.log(firstname.length);
// console.log(firstname[firstname.length-1]);
// for (let i = 0; i < firstname.length; i++) {
//     console.log(firstname[i]);    
// }
// console.log(firstname.charAt(0));
// console.log(firstname.charCodeAt(1));
// console.log(firstname.split());

// console.log(firstname);
// console.log(firstname.trim());
// console.log(firstname.trimStart());
// console.log(firstname.trimEnd());
// console.log(firstname.indexOf("h"));
// console.log(firstname.lastIndexOf("a"));

// console.log(firstname.slice(0,3));
// console.log(firstname.slice(-3));
// console.log(firstname.substring(1,4));
// console.log(firstname.replace("C","D"));

// let text = "salam Chinara salam";
// console.log(text.replaceAll("salam","sagol"));

// console.log(firstname.toLowerCase());
// console.log(firstname.toUpperCase());
// function strFirstCharToUpper(str) {
//     return str.charAt(0).toUpperCase().concat(str.slice(1))
// }
// console.log(strFirstCharToUpper("chinara"));

// let x = new String("Chinara")
// let y = new String("Chinara")
// console.log(typeof x == typeof y); //true
// console.log(x === y); //false

// console.log(firstname.match("C"));
// console.log(firstname.match(/C/g));
// console.log(firstname.match(/c/gi));

// console.log(firstname.includes("hin"));
// let startWith = firstname.startsWith("C")
// if (startWith == true) {
//     console.log("C ile bawlayir")
// }
// let endWith = firstname.endsWith("r")
// if (endWith == true) {
//     console.log("a ile bitir")
// }
// else{
//     console.log("bu herfle bitmir");
// }


//array methods

// const arr = new Array(4)
// const arr =[4]
// console.log(arr);

const numbers = [1, 140, 2, 4, 6, 78, 99];
const strings = ["Konul", "Chinara", "Roya"];

// let res = strings.fill('Jale')
// console.log(res);

// console.log(typeof numbers);
// console.log(Array.isArray(numbers));
// console.log(numbers.length);
// console.log(numbers[numbers.length-1]);
// console.log(strings[0]);
// let res = numbers.sort((a,b)=>a-b);
// let res = strings.sort();

// console.log(res);
// numbers.forEach(element => {
//     if(element>10){
//         console.log(element);
//     }
// });

// let res = numbers.push(25)//sondan elave edir
// let res = numbers.pop();//sondan silir
// let res = numbers.shift(); // evvelden silir
// let res = numbers.unshift(5) // evvele elave edir
// console.log(numbers);

// console.log(strings.concat(numbers));
// console.log(strings.join(","));
// console.log(strings);

// console.log(numbers);
// numbers.splice(3,2,3);
// let slice = numbers.slice(1,5)
// console.log(slice);
// console.log(numbers.includes(2));
// delete numbers[0];
// console.log(numbers[0]);
// let find = numbers.find(n=>n>4)
// console.log(find);
// let reverse = numbers.reverse();
// console.log(reverse);
// console.log(numbers.filter(n=>n>3));
// console.log(numbers.reduce((total, current )=> total + current));
// console.log(numbers.every(n=>n<40));//true false qaytarir 1-cini tapir dayanir
// console.log(numbers.some(n=>n<40));//true false qaytarir 1 true besdiki true qaytarir.

// console.log(numbers.indexOf(4));
// console.log(numbers.lastIndexOf(99));
// console.log(numbers.findIndex(n=>n>45));//indexi qaytarir

// let age = 55;
// console.log(typeof age);
// console.log(typeof age.toString());

// let age2 = "33";
// console.log(typeof parseInt(age2));
// console.log(age+age2);
// console.log(Number(age2)+ Number(age));

// const getNums = (num,...arr) =>{
//     console.log(arr);
// }
// getNums(1,2,3)

// let copyArr = [...numbers]
// console.log(copyArr);

// numbers.push(5)
// console.log(numbers);

// let user1 = {
//     name:"Chinara",
//     age:23
// }
// let copyUser1 = {...user1};
// console.log(copyUser1);

//	

//2) Parametr olaraq gelen stringi tersine ceviren method yazin.
// const reverseStr = str => {
//     return str.split("").reverse().join("");
// }
// console.log(reverseStr("Chinara"));