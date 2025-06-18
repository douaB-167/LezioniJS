//dichiaro una function
let demo = document.getElementById("demo");
const IVA = 0.22;
console.log(IVA);

function saluta(){
    console.log("Ciao dalla funzione");
    demo.innerHTML = "<h2> Ciao, Dario </h2>"
}

//per eseguire la funzione la devo richiamare
//la funzione la posso richiamare direttamente nello script
//saluta();

//la posso richiamare in un altra funzione ancora
function benvenuto(){
    saluta();
    console.log("Adesso sono dentro benvenuto");
}

//benvenuto();

//Adesso richiamo benvenuto dal HTML
let btn = document.getElementById("btn")
//ATT: nell'addEventListener la funzione va richiamata senza le parentesi tonde
// btn.onclick = benvenuto;
btn.addEventListener("click", benvenuto, false);