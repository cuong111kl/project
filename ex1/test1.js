let firstString=prompt("enter string");
let s="";
let i=firstString.length;
while(i>0){
    s += firstString.substring(i-1,i);
    i--;
}
console.log(s);