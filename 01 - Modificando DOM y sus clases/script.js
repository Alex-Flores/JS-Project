variable = document.querySelector('.switch input');
// console.log(variable);
function modoOscuro(){
    document.querySelector('body').classList.toggle('dark');
    localStorage.setItem('data', variable.checked);
    mostrar();
}
function mostrar(){
    corso = localStorage.getItem('data');
    if(corso === 'false'){
        console.log('Es blanco');
    }else{
        console.log('Es negro');
    }
    console.log(corso);
}

// CUANDO SE REFRESCA LA PAGINA
window.addEventListener('load', cambio());
function cambio(){
    obtener = localStorage.getItem('data');

    if(obtener === 'true' ){
        vasr = document.querySelector('body').classList.add('dark');
        console.log(vasr)
    }else{
        document.querySelector('body').classList.add('dark');
    }
}

// true es negro
// false es blanco