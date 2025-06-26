class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }
}
let feed = document.querySelector("#feed");
let mioForm = document.querySelector("#mioForm");

function inviaForm(event){
    let user = new User();

    feed.innerHTML = "";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/
    //Adesso che so come prendere i campi li controllo uno a uno
    if(mioForm.email.value.match(emailRegex) || mioForm.email.value == ""){
        feed.innerHTML += "<h5>Email errata</h5>";
        mioForm.email.setAttribute("class", "borderRed");
        event.preventDefault();
        //\\\\return false;
    }else{
        //mioForm.email.removeAttribute("class");
        mioForm.email.setAttribute("class", "borderGreen");
        user.email = mioForm.email.value;
    }
    
    if(mioForm.password.value == ""){
        feed.innerHTML += "<h5> Hai dimenticato la password </h5>";
        mioForm.password.setAttribute("class", "borderRed");
        event.preventDefault();
        //\\\\return false;
    }else{
        //mioForm.password.removeAttribute("class");
        mioForm.password.setAttribute("class", "borderGreen");
        user.password = mioForm.password.value;
    }

    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
    //localStorage.setItem("utente connesso", "Glenda");
    
    event.preventDefault();
    // mioForm.reset();
}


mioForm.addEventListener("submit", inviaForm, false);