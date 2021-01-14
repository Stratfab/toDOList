// selection de ul / récuperation du form de l'input texte et bouton
// eventlistener sur bouton / "(créer elemnts DIV (task)") 
// assigner contenu DIV depuis text input / ajout bouton supprimer
// ajout dans ul

// Variables pour retourner les objets html à partir de leur id
var task = document.getElementById("taskList"); 
var form = document.getElementById("form"); 
var add = document.getElementById("addTask"); 
var btn = document.getElementById("submit");


// Méthode gestionnnaire d'évènement pour soumettre le formulaire et afficher le résultat
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents the browser to redirect to another page
    if (add.value=="") {
        add.style.borderColor = 'red';
        return;
    } else {
        add.style.borderColor = 'silver';
        var value = add.value;
        add.value = "";
    }

// Création de l'élément div 
let div = document.createElement("div");
// Création de l'élément liste
let li = document.createElement("li");

// Récupération des tâches dans une li
li.textContent = value;
li.classList.add("task");

// Ajout de l'élément li dans div 
div.appendChild(li);
// Ajout de l'élément div dans task
task.appendChild(div); 


// Méthode pour barrer les tâches
li.addEventListener('click', function() {
   li.style.textDecoration = "line-through";

});


// Méthode pour supprimer les tâches 
li.addEventListener('dblclick', function() {
  task.removeChild(div);

});


});
