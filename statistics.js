
//////////////////////////////////////////////////////////////////////////////LOCAL STOREG




let printMenu = (id,name,type,price)=> {
    let table=document.getElementById('table') ;
 
     trEl = document.createElement('tr');
     table.appendChild(trEl);
     let tdEl = document.createElement('td');
      tdEl.textContent ="0000";
      trEl.appendChild(tdEl);
      let newName = document.createElement('td');
      newName.textContent = name;
      trEl.appendChild(newName); 
      let newType= document.createElement('td');
      newType.textContent = type;
      trEl.appendChild(newType);
      let newPrice= document.createElement('td');
      newPrice.textContent = price;
      trEl.appendChild(newPrice);
     trEl.classList.add('row');
 
     } 

     printMenu() ;



    function getData() {
    
        let retrievedData = localStorage.getItem("newFood");
        let arrayData = JSON.parse(retrievedData);
        console.log(arrayData) ;
        if (arrayData != null) {
        for (let i = 0; i < arrayData.length; i++) {
                    printMenu(arrayData[i].id,
                  arrayData[i].name,
                  arrayData[i].type,
                  arrayData[i].price) 
               
        
                } }
        
    

              } 

              getData() ;