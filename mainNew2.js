//debugger
var VideoContainer = document.getElementById("video_info");

var digitado  = document.getElementById("text-to-find");

entrou = true;

arrtags = [];

alltags = [];

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://raw.githubusercontent.com/Albina-fazenda/repo2/master/R1.json');

ourRequest.onload = function() {
OurData=JSON.parse(ourRequest.responseText);
console.log ("OurData", OurData);
//console.log("OurDataIndex", OurData[1]);
//console.log("OurDatFazenda", OurData[1].name);
//renderHTML(OurData);
//coletatags(OurData);
coletatags(OurData);
console.log("PASSEI");
naoPesquisa(OurData);
autocomplete(document.getElementById("text-to-find"), alltags);
};



ourRequest.send();



function coletatags(data){

    for (i = 0; i < data.length; i++) {      

    arrtags = data[i].tg;

    alltags = alltags.concat(arrtags);

   // console.log("OurDataTags",data[i].tg);
   // console.log("ArrTags", arrtags);
   // console.log("AllTags", alltags);
    };

};

function pesquisar (item){  
   // console.log ("OurData2", OurData);

//console.log("FORA", entrou);
   
   
  // if (entrou) {       
    

       //entrou = false;
      // console.log("DENTRO", entrou);

   // } else {
      //  console.log("DENTRO2", entrou);
       // console.log("NODES", VideoContainer.childNodes.length);

       
  //  };

    limpar();
    
    item = digitado.value;
        for (i=0; i<OurData.length; i++) {

        for (d=0; d<OurData[i].tg.length; d++){
    
    if (item === OurData[i].tg[d]) {

       
    console.log("TRUE",OurData[i].tg[d]);

    mostrarvideo(OurData);    

  //  console.log("OurDataVideo", OurData[i].pl);
    } else if (item === "")  {

      
      console.log("PASSEI2");
      naoPesquisa(OurData);
      

    } else {
        
    console.log("FALSE",OurData[i].tg);  
   // console.log("OurDataVideo", OurData[i].pl);
    };

     };

 };
    
   // console.log("DIGITADO",digitado.value);
   //  console.log("ITEM", item);
  

 
           
};

function mostrarvideo(data){
    // console.log("OurDataVideo", data);
    //console.log("OurDataVideo", OurData[i].pl);
   // var htmlString = '<a href="' + data[i].name +'"> <img src="' + data[i].thumb + '" style="width:640px;height:360px;border:0;"></a>'+"<br>"+ "<center>" +data[i].label + "</center>" +"<br>";


   //var htmlString = '<center><a href="' + data[i].name +'"> <img src="'+ data[i].thumb + '" style="width:640px;height:360px;border:0;"></a></center>'+"<br>"+ "<center>" +data[i].label + "</center>" +"<br>";
  
      var htmlString =  data[i].label; 

   

  // jwplayer("myElement").setup({playlist: data[i].name});
  // console.log("HTML", htmlString);
      jwplayer("myElement").setup({playlist: data[i].name});
      VideoContainer.insertAdjacentHTML('beforeend',htmlString);
     
      console.log("MVNODESCRIA", VideoContainer.childNodes[i]);
      console.log("MVNODESCRIADOS", VideoContainer.childNodes.length);
    
  // for (i=0; i<VideoContainer.childNodes.length; i++){

    
  //  };
 
};


function autocomplete(inp,arr) {


   //console.log("input", inp);      
   console.log("array", arr);
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, ii, val = this.value;
        var palavrasArray = [];
        //console.log("a",a);
        //console.log("b",b);
        //console.log("i",i);
        //console.log("ii",ii);
        //console.log("val",val);
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
         //console.log(i);
          
          for (ii = 0; ii < arr[i].length-1; ii++) {
            //console.log(ii);

              if (arr[i].trim().substr(ii, val.length).toUpperCase() ==  val.toUpperCase()) {                      
               /*create a DIV element for each matching element:*/
               b = document.createElement("DIV");                              
               //console.log(b);
               /*make the matching letters bold:*/
               var inPal = "";
               var finPal = "";
               //var destaque = "";
              // destaque = val;
               //b.innerHTML = "<strong>" + arr[i].substr(arr[i].indexOf(val), val.length)  +  "</strong>";
               //console.log("INDVAL", arr[i]);
               inPal = arr[i].substr(0,arr[i].indexOf(val));
               finPal = arr[i].substr(arr[i].indexOf(val)+val.length, arr[i].length-inPal.length-val.length);
               //console.log("InPalL", inPal.length);
              
               b.innerHTML = inPal + "<strong>" + val + "</strong>" + finPal;
                /*insert a input field that will hold the current array item's value:*/
               b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
               b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();


              
           
            });
           // debugger

            
           
           
            //console.log("at",a.childNodes.length);

           // console.log("b",b.innerText);

            //debugger
         // for (i=0; i < palavrasArray.length; i++ ) {
           // debugger
          if (palavrasArray[i] != b.innerText) {
              a.appendChild(b); 
              palavrasArray[i]= b.innerText;
              console.log("PARRAY", palavrasArray);
             console.log("IGUAL", "TRUE");
            } else {
              
              //console.log("a",a.innerText);
             console.log("IGUAL", "FALSE");
            };


          //}


            //console.log("CHILD", a.appendChild(b));
           
          } 


          }
       }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        console.log(x);
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
            pesquisar(OurData);
          } else if (currentFocus = -1) {
            console.log("ENTREI");
            limpar();
           naoPesquisa(OurData);

          };

    
          };
          

       // }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
      
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  };

function limpar() {


   for (i=0; i<myElement.childNodes.length; i=i) {
    myElement.removeChild(myElement.childNodes[i]);

    };

   
    for (i=0; i<VideoContainer.childNodes.length; i=i) {
 //   console.log("NODESREMOVE", VideoContainer.childNodes.length);
    VideoContainer.removeChild(VideoContainer.childNodes[i]);
  //  console.log("NODESREMOVEi", VideoContainer.childNodes[i]);
 // VideoContainer.removeChild(VideoContainer.childNodes[1]);
     }; 
    

};

function naoPesquisa (data) {

    for (i=0; i<OurData.length; i++) { 
      var htmlString = '<a href="' + data[i].name +'"> <img src="' + data[i].thumb + '" style="width:640px;height:360px;border:0;"></a>'+"<br>"+ "<center>" +data[i].label + "</center>" +"<br>";
      VideoContainer.insertAdjacentHTML('beforeend',htmlString);
      console.log("NODESCRIA", VideoContainer.childNodes[i]);
      console.log("NODESCRIADOS", VideoContainer.childNodes.length);
    };

};



 
