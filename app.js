'use strict';
let counter=0 ;
let val=0;
const body = document.getElementsByTagName('body');
let submit=document.getElementById('submit') ;
let form=document.getElementById("form1");
console.log(form) ;
const AllFood=[] ;
//constructor:

function Food(id, name,type, price,) {
    this.id=id ;
    this.name=name;
    this.type= type;
    this.price= price;
    AllFood.push(this);
} 


Food.prototype.UniqNum =function(counter){
const num=counter+1;
const str =num.toString();
const ans =str.padStart(4,'0');
this.FoodId=ans ;
++this.id ;}

UniqNum(counter) ;


Food.prototype.printMenu = function () {
   let table=document.getElementById('table') ;

    trEl = document.createElement('tr');
    table.appendChild(trEl);
    let tdEl = document.createElement('td');
     tdEl.textContent = this.id;
     trEl.appendChild(tdEl);
     let newName = document.createElement('td');
     newName.textContent = this.name;
     trEl.appendChild(newName); 
     let newType= document.createElement('td');
     newType.textContent = this.type;
     trEl.appendChild(newType);
     let newPrice= document.createElement('td');
     newPrice.textContent = this.price;
     trEl.appendChild(newPrice);
    trEl.classList.add('row');

    } 
    

form.addEventListener("submit",handleSubmit);
function handleSubmit(event) {
    event.preventDefault(event);
    let name = event.target.foodName.value ;
    let type = event.target.foodType.value ;
    let price = event.target.price.value; 

    const newFood=new Food(name,type,price);
    saveData(AllFood);
}

    function saveData(newFood) {
        let stringObj = JSON.stringify(newFood);
        localStorage.setItem('newFood', stringObj);
    }