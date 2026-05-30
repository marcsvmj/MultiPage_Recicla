const form = document.getElementById("formContato");
const overlay = document.getElementById("overlay");
const nomeUsuario = document.getElementById("nomeUsuario");
const btnOk = document.getElementById("btnOk");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;

    nomeUsuario.textContent = nome;

    overlay.style.display = "flex";
});

btnOk.addEventListener("click", function(){

    overlay.style.display = "none";

});