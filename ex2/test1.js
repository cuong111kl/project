let firstString=prompt("enter string");

const arr= firstString.split(" ");
let s="";

for(let i=0;i< arr.length;i++){
s += arr[i].charAt(0).toUpperCase() + arr[i].slice(1)+ " ";
}
console.log(s);