const emailPattern  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;


function ellenorzesEmail(){

    const email = document.getElementById('email').value.trim();
    let ervenyes = 0;

    if (email.match(emailPattern)){
        ervenyes = 1;
        console.log("Érvényes email")
        document.getElementById('email').value = "";
    }
    else{
        ervenyes = 0;
        console.log("Érvénytelen email")
        document.getElementById('email').value = "";
    }
}

function ellenorzesJelszo(){
    const jelszo = document.getElementById('password').value.trim()
    const jelszoAgain = document.getElementById('passwordagain').value.trim()

    if (jelszo.match(passwordPattern) && jelszoAgain.match(jelszo)){
        console.log("Érvényes jelszó")
        document.getElementById('password').value = "";
        document.getElementById('passwordagain').value = "";
    }
    else{
        console.log("Érvénytelen jelszó")
        document.getElementById('password').value = "";
        document.getElementById('passwordagain').value = "";
    }
}


function fugMeg(){
    if (ellenorzesEmail.ervenyes == 1){
        ellenorzesJelszo()
    }
    else{
        console.log("Érvénytelen jelszó vagy email")
    }
    
}

