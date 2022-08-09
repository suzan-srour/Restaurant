'use strict';
let counter=0 ;
const body = document.getElementsByTagName('body');
//constructor:
const allFoods = [];
function Food(id, name,type, price,) {
    this.FoodId = id;
    this.FoodName=name;
    this.FoodType= type;
    this.Price = price;
    allFoods.push(this);

function UniqNum(counter){ 
    this.FoodId=counter+1 ;
    ++counter; } 

} 


Food.prototype.printMenu = function () {

    const divEl = document.createElement('div');
    body[0].appendChild(divEl);

    const pEl = document.createElement('p');
    pEl.textContent = `Food Id': ${this.FoodId} : Food Name :${this.FoodName}  :Food Type :${this.FoodType} :${this.Price}` ;
    divEl.appendChild(pEl);

    const tableEl = document.createElement('table');
    divEl.appendChild(tableEl);

    for (let i = 0; i < this.allFoods.length; i++) {
        let trEl = document.createElement('tr');
        let tdEl = document.createElement('td');
        tableEl.appendChild(trEl);
        trEl.appendChild(tdEl);
        tdEl.textContent = this.ingredients[i];
    } // store data in table


}
          

for (let i = 0; i < allFoods.length; i++) {
    allFoods[i].printMenu();
}


 console.log(allFoods);
let form1 = document.getElementById("form");
//submit(form);
form1.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    let name = event.target.this.FoodNameFoodName.value ;
    let type = event.target.this.FoodType .value ;
    let price = event.target.this.Price.value; }
    
    const newobj = new Food(name,type, price);
    newobj.printMenu();
    console.log(allFoods) ;

    

    


