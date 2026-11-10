const emailPattern  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;


function ellenorzesEmail(){

    const email = document.getElementById('email').value.trim();

    if (email.match(emailPattern)){
        const jszoveg = document.getElementById('regEmail');
        const njszoveg = document.createTextNode('Jó email-t adtál meg!')
        jszoveg.replaceChildren();
        jszoveg.appendChild(njszoveg);
        document.getElementById('email').value = "";
    }
    else{
        const rszoveg = document.getElementById('regEmail');
        const nrszoveg = document.createTextNode('Rossz email-t adtál meg!')
        rszoveg.replaceChildren();
        rszoveg.appendChild(nrszoveg)
        
        document.getElementById('email').value = "";
    }
}

function ellenorzesJelszo(){
    const jelszo = document.getElementById('password').value.trim()
    const jelszoAgain = document.getElementById('passwordagain').value.trim()
    

    if (jelszo.match(passwordPattern) && jelszoAgain === (jelszo)){
        const jszoveg = document.getElementById('regJelszo');
        const njszoveg = document.createTextNode('Jó jelszót adtál meg!')
        jszoveg.replaceChildren();
        jszoveg.appendChild(njszoveg)

        document.getElementById('password').value = "";
        document.getElementById('passwordagain').value = "";
    }
    else{
        const rjszoveg = document.getElementById('regJelszo');
        const nrjszoveg = document.createTextNode('Rossz jelszót adtál meg!')
        rjszoveg.replaceChildren();
        rjszoveg.appendChild(nrjszoveg)
        document.getElementById('password').value = "";
        document.getElementById('passwordagain').value = "";
    }
}


function fugMeg(){
    ellenorzesEmail();
    ellenorzesJelszo();
}

