'use strict';
let counter=999 ;
const body = document.getElementsByTagName('body');
let submit=document.getElementById('submit') ;

let val=0;
const AllFood=[] ;
//constructor:

function Food(id, name,type, price,) {
    this.id= id;
    this.name=name;
    this.type= type;
    this.price= price;
    AllFood.push(this);
    this.printMenu();
} 


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
    
    
    // store data in table

//Food.id ;

//submit(form);

let form=document.getElementById("form1");
form.addEventListener("submit",handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    let name = event.target.foodName.value ;
    let type = event.targe.foodType.value ;
    let price = event.target.price.value; 
    let id=UniqNum() ;
    const newFood=new Food(id,name,type,price);

    
}



function UniqNum(counter){ 
    this.FoodId=counter+1 ;
    ++counter; } 


    
    function saveData(data) {
        let stringObj = JSON.stringify(data);
        localStorage.setItem('newFood', stringObj);
    }