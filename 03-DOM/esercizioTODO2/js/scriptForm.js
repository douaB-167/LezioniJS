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
    }else{
        mioForm.email.removeAttribute("class");
        user.email = mioForm.email.value;
    }
    
    if(mioForm.password.value == ""){
        feed.innerHTML += "<h5> Hai dimenticato la password </h5>";
        mioForm.password.setAttribute("class", "borderRed");
        event.preventDefault();
    }else{
        mioForm.password.removeAttribute("class");
        user.password = mioForm.password.value;
    }

    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
    
    event.preventDefault();
}


mioForm.addEventListener("submit", inviaForm);