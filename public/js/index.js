window.addEventListener('load', function() {

    let main = document.querySelector('main');

    let h2 = document.querySelector('h2');

    let a =  document.querySelector('a');

    let p = document.querySelectorAll('p');

    let subtitulo = document.querySelector('.subtitulo')

    let body = document.querySelector("body")

    let container = document.querySelector(".container")
    

    let nombre = prompt('Ingrese su nombre:');

    if(nombre){
     subtitulo.innerHTML += nombre
    }else{
     subtitulo.innerHTML += 'invitado' 
    }

    h2.style.textTransform = 'uppercase'

    a.style.color = '#E51B3E'

    let confirmar = confirm("¿Desea colocar un fondo de pantalla?");

    if(confirmar){
        body.classList.add("fondo")
    }

    for (let ps = 0; ps < p.length; ps++) {
        if(ps % 2 == 0){
            p[ps].classList.add("destacadoPar")
        }else{
            p[ps].classList.add("destacadoImpar")

        }
        
    }

    container.style.display = "block";
});