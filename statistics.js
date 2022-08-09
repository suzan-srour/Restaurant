
//////////////////////////////////////////////////////////////////////////////LOCAL STOREG




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
     



    function getData() {
    
        let retrievedData = localStorage.getItem("newFood");
        let arrayData = JSON.parse(retrievedData);
        
    
        if (arrayData != null) {
        for (let i = 0; i < arrayData.length; i++) {
                    
                new Food(
                  arrayData[i].id,
                  arrayData[i].name,
                  arrayData[i].type,
                  arrayData[i].price,
                );
                } }
        
        for (let i = 0; i < AllFood.length; i++) {

          AllFood[i].printMenu(); 
        }
    }