import { log } from "node:console";

let arr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "a",
  "b",
  "c",
  "a",

  
];let count = {};

for (let i = 0; i < arr.length; i++) { 
    let item = arr[i];
    if (count[item]) {
        count[item]++;
    } else {
        count[item] = 1;
    }                   
 }
console.log(count);