

let PostButton = document.getElementById("PosttodoBut");
let MrkAll = document.getElementById("MrkButt");
let DelAll = document.getElementById("DelButt");
let ClrAll = document.getElementById("ClrButt")
let NewTodostr = document.getElementById("newTo");
let lista = document.getElementById("li");




PostButton.addEventListener("click", (event)=>{
    event.preventDefault();
var bocs = document.createElement("INPUT");
bocs.setAttribute("type", "checkbox");
var li = document.createElement("li");
var txt = document.createTextNode(" "+NewTodostr.value);
li.appendChild(bocs);
li.appendChild(txt);
lista.appendChild(li);
NewTodostr.value="";

    //console.log("length: "+lista.childNodes.length);
    //console.log(lista.childNodes[0].childNodes.length);
    
    

});


MrkAll.addEventListener("click", (event)=>{ 

    for(j = 0; j<lista.childNodes.length; j++){
    
        for(i = 0; i<lista.childNodes[j].childNodes.length; i++){
    
            if(i%2 == 0 || i == 0){
    
            lista.childNodes[j].childNodes[i].checked = true;
            }
        }
    }

});

ClrAll.addEventListener("click", (event)=>{ 

    for(j = 0; j<lista.childNodes.length; j++){
    
        for(i = 0; i<lista.childNodes[j].childNodes.length; i++){
    
            if(i%2 == 0 || i == 0){
    
            lista.childNodes[j].childNodes[i].checked = false;
            }
        }
    }

});

DelAll.addEventListener("click", (event)=>{ 

   while(lista.firstChild){
       lista.removeChild(lista.firstChild);
   }

});


