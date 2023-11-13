//1.printing odd numbers.
//Anonymous:
var res=[];
var x=function(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!==0)
    {
        res.push(arr[i]);
    }
    }
    return res;
}
console.log("Printing odd numbers:-")
console.log("Anonymuous:",x([3,7,8,2,6,10]));

//IIFE:
var res=[];
(function(array)
{
    for(var i=0;i<array.length;i++)
    {
        if(array[i]%2!==0)
    {
        res.push(array[i]);
    }
}
console.log("IIFE:", res);
}([3,7,8,2,6,10]));

//Arrow function:
var res=[];
var odd=(arr)=>
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!==0)
    {
        res.push(arr[i]);
    }
    }
    return res;
}
console.log("Arrow function:",odd([3,7,8,2,6,10]));


//2.Convert all the strings to title caps in a string array
//Anonymuous:
   var s=function(str) 
   {
   var result=str.toString();
    var data = result.toLowerCase().split(' ');
    for (var i = 0; i < data.length; i++) {
      data[i] = data[i].charAt(0).toUpperCase() + data[i].slice(1); 
    } 
    return data.join(' ');
  }
  console.log("converting all strings to title caps:-")
console.log("Anonymuous:", s(["hOW arE yOu?"]));

//IIFE:
(function(str)
{
    var result=str.toString();
     var data = result.toLowerCase().split(' ');
     for (var i = 0; i < data.length; i++) {
       data[i] = data[i].charAt(0).toUpperCase() + data[i].slice(1); 
     } 

   console.log("IIFE:",data.join(' '));
    })(["hOW aRE yOu?"])

    //Arrow function:-
    var newstr=(str)=>{
    var result=str.toString();
    var data = result.toLowerCase().split(' ');
    for (var i = 0; i < data.length; i++) {
      data[i] = data[i].charAt(0).toUpperCase() + data[i].slice(1); 
    } 
     return data.join(' ');
 }
   console.log("Arrow function:",newstr(["hOW aRE yOu?"]));

//3)Sum of all numbers in an array 
//Anonymous:
  var add=function(array){
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
  }
  console.log("sum of all numbers in an array:-")
console.log("Anonymous:",add([7,8,5,8]));

//IIFE:
(function(arr){
var sum = 0;
for(var i = 0 ; i< arr.length ; i++){
   sum = sum + arr[i];
}
 console.log("IIFE:", sum);
})([7,8,5,8]);

//Arrow function:
var add=(arr)=>{
    var sum = 0;
    for(var i = 0 ; i< arr.length ; i++){
       sum = sum + arr[i];
     }
     return sum;
  }
console.log("Arrow function:",add([7,8,5,8]));


//5.Return all the palindromes in an array
//Anonymous
var p=function (arr)
{
  var output=[];
  for (var i=0;i<arr.length;i++)
  {
    var data=arr[i].split("").reverse().join("");
    if(data===arr[i])
    {
      output.push(arr[i])
    }
  }
    return output;
  }
  console.log("Returning all palindromes in an array:-")
console.log("Anonymuos:", p(['malayalam','1221','data']))

//IIFE
var output=[];
(function(arr){
  for (var i=0;i<arr.length;i++)
  {
    var data=arr[i].split("").reverse().join("");
    if(data===arr[i])
    {
      output.push(arr[i])
    }
  }
   console.log("IIFE:", output);
   
})(['malayalam','1221','data'])

//Arrow function:-
var output=[];
var palindrome =(arr)=>{
  for (var i=0;i<arr.length;i++)
  {
    var data=arr[i].split("").reverse().join("");
    if(data===arr[i])
    {
      output.push(arr[i])
    }
  }
    return output;
  }
console.log("Arrow function:",palindrome(['malayalam','1221','data']))

//Return median of two sorted arrays of the same size.
//Anonymous
function Median(arr1,arr2)
{
let arr=[...arr1,...arr2];
arr.sort((a,b)=>a-b);
if(arr.length%2==0)
{
  return ((arr[(arr.length/2)-1]+arr[arr.length/2])/2);
  }
else
return arr[Math.floor(arr.length/2)];
}
console.log("Median of Two Sorted Arrays: ");
console.log("Anonymuos:", Median([1,5,],[3,9]));
//IIFE
var Median=(arr1,arr2)=>{
 let arr=[...arr1,...arr2];
 arr.sort((a,b)=>a-b);
 if(arr.length%2==0)
 {
  return ((arr[(arr.length/2)-1]+arr[arr.length/2])/2);
  }
 else
 return arr[Math.ceil(arr.length/2)];
}
console.log("IIFE:", Median([1,5],[3,9]))

//Remove duplicates from an array
//Anonymous
const removeDuplicates=(arr)=>{
  const newArr=[];
  for(let item of arr){
    if(!newArr.includes(item)){
     newArr.push(item);
   }
  }
  return newArr;
}
console.log("Removing Duplicates:");
console.log("Anonymuous:",removeDuplicates([3,5,6,7,9,3,5]));

//IIFE
var removeDuplicate = (arr) => {
  var newArr = [];
  for (let item of arr) {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  }
  return newArr;
};
console.log("IIFE: ", removeDuplicates([3,5,6,7,9,3,5]));

//Rotate an array by k times
//Anonymous
const rotateArray=(arr,k)=>{
  arr=arr.reverse();
  let a=arr.slice(0,arr.length/2);
  let b=arr.slice(arr.length/2);
  return [...b, ...a];
}
console.log("Rotating Array: ");
console.log("Anonmyous: ",rotateArray([1,2,3,4,5],2));
//IIFE
function rotateArrayIIFE(arr,k){
  arr=arr.reverse();
  let a=arr.slice(0,arr.length/2);
  let b=arr.slice(arr.length/2);
  return [...b, ...a];
}
console.log("IIFE: ",rotateArrayIIFE([1,2,3,4,5],2));
