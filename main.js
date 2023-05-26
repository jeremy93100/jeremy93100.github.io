var bloc = document.getElementById("carre");
var bloc = document.getElementById("case");
var bloc = document.getElementById("caseb");

var compteurA = 0;
var compteurB = 0;

function jour() {
    bloc.style.backgroundColor = "peru";
    bloc.style.color = "white";
}

function nuit() {
    bloc.style.backgroundColor = "indigo";
    bloc.style.color = "chocolate";
}

function ajout1() {
    compteurA = compteurA + 1;
    compteurB = compteurB + 1;
    digi.innerHTML = compteurA
    digiB.innerHTML = compteurB;
    
if (compteurA == 3) {
    bloc.style.fontSize = "50px";
    alert('bravo');
} else if (compteurA == 5) {
    bloc.style.fontSize = "50px";
    bloc.style.backgroundColor = "greenyellow";
} else {
    bloc.style.fontSize = "10px";
}
}
