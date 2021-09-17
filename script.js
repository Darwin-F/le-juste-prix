let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');

error.style.display ="none";

let nombreAleatoire = Math.floor(Math.random()*1001);
let coups = 0;
let nombreChoisi;

function verifier (nombre) {
    let instruction = document.createElement('div');

    if(nombre < nombreAleatoire) {
        instruction.textContent = "#" + coups + "(" + nombre + ") C'est plus !";
        instruction.className = "instruction plus"
    }
    else if (nombre > nombreAleatoire) {
        instruction.textContent = "#" + coups + "(" + nombre +  ") C'est moins !";
        instruction.className = "instruction moins"
    }
    else {
        instruction.textContent = "#" + coups + "(" + nombre +  ") Félicitations vous avez trouver le juste prix !";
        instruction.className = "instruction fini";
        input.disabled = true;
    }
    document.getElementById('instructions').prepend(instruction);
}



input.addEventListener('keyup',() => {
    if(isNaN(input.value)) {
        error.style.display = "inline";
    }
    else {
        error.style.display = "none";
    }
});

formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    if(isNaN(input.value) || input.value == '') {
        input.style.borderColor = "red";
    }
    else {
        input.style.borderColor = "silver";
        coups++;
        nombreChoisi = input.value;
        input.value ='';
        verifier(nombreChoisi);
    }
})