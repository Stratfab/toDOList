//  selection de ul / récuperation du form de l'input texte et bouton
// eventlistener sur bouton / "(créer elemnts DIV (task)") 
// assigner contenu DIV depuis text input / ajout bouton supprimer
// ajout dans ul


var task = document.getElementById("taskList"); 
var form = document.getElementById("form"); 
var add = document.getElementById("addTask"); 
var btn = document.getElementById("submit");


form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents the browser to redirect to another page
    if(add.value==""){
        add.style.borderColor = 'red';
        return;
    }else{
        add.style.borderColor = 'silver';
       var value = add.value;
        add.value = "";

    }

var div = document.createElement("div");


var li = document.createElement("li");
li.textContent = value;
li.classList.add("task");
div.appendChild(li);
task.appendChild(div); 



li.addEventListener('click', function(){
   li.style.textDecoration = "line-through";

});

li.addEventListener('dblclick', function(){
  task.removeChild(div);


});



});
