const api = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';

fetch(api)
  .then(response => response.json())
  .then(result => {
    result.forEach(function(element) {
      
      document.getElementById('cards').innerHTML += `
                 <div class="cards-item" id="cardItem" >  

                     <div class="img-card">
                          <img src='${element.photo}'>
                         <h2 class="title-6">Diária R$ ${element.price}</h2>
                    </div>
                   <h6 class="text">${element.property_type}</h6>

                    <h1 class="title-6">${element.name.toLowerCase()}</h1>
                 </div>       
             `
       });
     });

function Search(){
  fetch(api)
  .then(response => response.json())
  .then(result => {
    var campo = document.getElementById('procurar');

    result.forEach(function(element) {
      document.getElementById('cardItem').remove()
      if(campo.value == element.price){
        
      document.getElementById('cards').innerHTML += `
                 <div class="cards-item" id="cardItem" >  

                     <div class="img-card">
                          <img src='${element.photo}'>
                         <h2 class="title-6">Diária R$ ${element.price}</h2>
                    </div>
                   <h6 class="text">${element.property_type}</h6>

                    <h1 class="title-6">${element.name.toLowerCase()}</h1>
                 </div>       
             `
    }
  });
     });

}

function ShowAll(){
  fetch(api)
  .then(response => response.json())
  .then(result => {

    $(".cards-item").each(function(){ 
     console.log(this)
          $(this).remove(); 
  });


    result.forEach(function(element) {
      document.getElementById('cards').innerHTML += `
                 <div class="cards-item" id="cardItem" >  

                     <div class="img-card">
                          <img src='${element.photo}'>
                         <h2 class="title-6">Diária R$ ${element.price}</h2>
                    </div>
                   <h6 class="text">${element.property_type}</h6>

                    <h1 class="title-6">${element.name.toLowerCase()}</h1>
                 </div>       
             `
       });
     });
}