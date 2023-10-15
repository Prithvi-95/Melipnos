function add(a,b)
{
    return a+b;
}
var x=add(2,5);
document.write(x+"<br>");
var add1=(a,b)=>{
    return a+b;
}
var fruits = ["kiwi","banana","apple","orange"];

document.write("<br>"+fruits[0]);
document.write("<br>"+typeof(fruits));    
document.write("<br>"+fruits.length);
document.write("<br>"+fruits);
document.write("<br>"+Object.values(fruits));

// arrays follow Last in first out operations

// push

fruits.push("watermelon");
document.write("<br>"+fruits);

//pop
document.write("<br>"+fruits.pop(3)); // pop returns the last value from the array
document.write("<br>"+fruits);
document.write("<br>"+fruits.sort());
fruits.splice(2,3,"abc2","abc3");
document.write("<br>"+fruits)
var j=fruits.join(" and ")
document.write("<br>"+j)
// var abc= setTimeout(eout,5000)
// function eout(){
//     location.replace("https://www.geeksforgeeks.org/how-to-redirect-to-another-webpage-using-javascript");
//     document.write("hello");
// }
// var item={
//     "name":"hi",
//     "number":21,
// };
// item.show=function(){
//     document.write(this.name);
// }
// item.show();
function item3(name,price,av_qty){
    this.name=name;
    this.price=price;
    this.av_qty=av_qty;

    this.show=function(){
        document.write("<br>"+this.name+"<br>"+this.price+"<br>"+this.av_qty);
    }
}
let item1= new item3("hi","no",20);
item1.show();