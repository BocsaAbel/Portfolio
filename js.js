const emailPattern  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const email = "sa@turr.hu";

console.log(email.match(emailPattern) ? "Érvényes email" : "Érvénytelen email");


const emailPattern2 = /^[^\s@]{3,}@[^\s@]{3,}\.[^\s@]{2,}$/;

function ellenorzesEmail(){

    const email = document.getElementById('email').value.trim();

    if (email.match(emailPattern2)){
        
    }
    else{
        
    }
}