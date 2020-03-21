var VideoContainer = document.getElementById("video_info");

var i = 0;

var vtag = [];

var item = [];

var digitado  = document.getElementById("text-to-find");

var itemsFiltrados = [];

var itemsVerif = "";



function fprocura() {

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://raw.githubusercontent.com/Albina-fazenda/repo2/master/R1.json');

ourRequest.onload = function() {
var OurData=JSON.parse(ourRequest.responseText);
renderHTML(OurData);


};

ourRequest.send();



function renderHTML(data) {

  

  for (i = 0; i < data.length; i++) {


        
        vtag = data[i].tg;

        
      // console.log(vtag);

        function Pesquisar (item) {              
         return item === digitado.value;

         };

      itemsFiltrados.push(vtag.find(Pesquisar));

      itemsVerif = vtag.find(Pesquisar);
        



      console.log(itemsFiltrados);

      console.log(itemsVerif);



      if (itemsVerif==undefined) {

         console.log("false");             
        
 
     }  else {
 
      console.log("true");

      console.log(data[i].name);
           

      var htmlString = '<a href="' + data[i].name +'"> <img src="' + data[i].thumb + '" style="width:640px;height:360px;border:0;"></a>'+"<br>"+ "<center>" +data[i].label + "</center>" +"<br>";
    
     

      VideoContainer.insertAdjacentHTML('beforeend',htmlString);

        };
      

 

      //console.log(Pesquisar(item));

      //console.log(vtag.find(Pesquisar));              

      //console.log(vtag.findIndex(Pesquisar));
      
      // console.log(vtag);
         
 
     

          
        //var htmlString = '<a href="' + data[i].name +'"> <img src="' + data[i].thumb + '" style="width:640px;height:360px;border:0;"></a>';

       // VideoContainer.insertAdjacentHTML('beforeend',htmlString);

        //console.log(htmlString);
       
  }   



};


  
}