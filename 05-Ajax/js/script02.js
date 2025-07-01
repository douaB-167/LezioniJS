const urlEP = "https://reqres.in/api/users?page=1";

//se nella fetch non inserisco un configuration object, di default sto eseguendo un metodo GET
fetch(urlEP, {
    method: "get",  //se non lo passo è perchè di default get
    headers : {
        "x-api-key" : "reqres-free-v1"
    }
})
.then(data => { //nomi arbitrari
    return data.json();
})
.then(response => {
    console.log(response);
    
    //voglio il nome di George
    //console.log(response.data[0].first_name);

    //voglio il nome di tutti
    // for(let i = 0; i < response.data.length; i++){
    //     console.log(response.data[i].first_name);
    //     console.log(response.data[i].email);
        
    // }
    
})