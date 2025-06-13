let btnTortaMele = document.getElementById("btn1");
let btnTortaPasticcera = document.getElementById("btn2");
let btnTortaSaintHonore = document.getElementById("btn3");

class Torta{
    constructor(nome, prezzo, ingredienti, imgTorta){
        this.nome = nome;
        this.prezzo = prezzo;
        this.ingredienti = ingredienti;
        this.data_scadenza = new Date();
        this.imgTorta = imgTorta;
    }
}

let torta1 = new Torta("Torta di miele", "5.49€", ["farina", "uova", "latte", "zucchero", "vaniglia"], "./img/torta_saint_honore.jpeg");
btnTortaMele.addEventListener("click", function(){
    document.getElementById("risultato1").innerHTML = `Gli ingredienti della ${torta1.nome} sono: ${torta1.ingredienti}`;
});

let torta2 = new Torta("Crostata di crema pasticcera", "4.49€", ["farina", "uova", "latte", "zucchero", "vaniglia"], "./img/torta_crema_pasticcera");
btnTortaPasticcera.addEventListener("click", function(){
    document.getElementById("risultato2").innerHTML = `Gli ingredienti della ${torta2.nome} sono: ${torta2.ingredienti}`;
});

let torta3 = new Torta("Torta Saint Honoré", "6.49€", ["farina", "uova", "latte", "zucchero", "vaniglia"], "./img/torta_mele");
btnTortaSaintHonorerta.addEventListener("click", function(){
    document.getElementById("risultato3").innerHTML = `Gli ingredienti della ${torta3.nome} sono: ${torta3.ingredienti}`;
});