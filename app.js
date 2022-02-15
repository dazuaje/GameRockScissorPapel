/*----Modal Function---------- */
const iconClose = document.querySelector('.iconClose');
const btnRules = document.querySelector('.btnRules');
const modal = document.querySelector('.modal');

btnRules.addEventListener('click', () => {modal.classList.add('active')});
iconClose.addEventListener('click', () => {modal.classList.remove('active')});


/*Logic */

const piedra = document.querySelector('#piedra');
const papel = document.querySelector('#papel');
const tijera = document.querySelector('#tijera');

const indicador = document.querySelector("#indicador");
const playAgain = document.querySelector("#playAgain");


//let array = ["piedra", "papel", "tijera"];

/*function nombre(parametro)*/ 
//parametro




/*
piedra.addEventListener('click', () =>{
  let random = Math.floor(Math.random() * 3);
  if(piedra == array[random]){
    console.log("piedra", array[random]);
    console.log(random);
  }else if(papel == array[random]){
    console.log("papel", array[random]);
    console.log(random);
  }else{
    console.log("tijera", array[random]);
            console.log(random);
          }
    }
)


*/


/**********Indicador de victoria o derrota*************/
let game = document.querySelector('.game');
let resultado = document.querySelector('#indicador');




/*if(boton seleccionado === tijera || boton selecionado === piedra || boton sleecionad === papel){
    emapte
}else if(array === piedra ){
    */

/*
if(tijera && papel || papel && piedra ){
    Gana
}
else if(Seleccion && SeleccionComputadora son iguales){
    Empata
}
else(){
    Pierde
}


[piedra, papel, tijera];

ramdon = mathFloor()*2


if(piedra === )

*/




/*const fuction = (parametro)=>{
        
        let random = Math.floor(Math.random() * 3);
        if(parametro == array[random]){
            console.log("piedra", array[random]);
            console.log(random);
        }else if(parametro == array[random]){
            console.log("papel", array[random]);
            console.log(random);
        }else{
            console.log("tijera", array[random]);
            console.log(random);
        }
)
}
    papel.addEventListener("click",()=>{
         function ("papel");
    });
    
    piedra.addEventListener("click"){
        function("piedra");
    }

    tijera.addEventListener(){
        function("tijera");
    }
*/
papel.addEventListener("click",()=>{
    juego("papel");
});

piedra.addEventListener("click",()=>{
    juego("piedra");
});

tijera.addEventListener("click",()=>{
    juego("tijera");
});


function juego(parametro){
    let array = ["piedra", "papel", "tijera"];

    let random = Math.floor(Math.random() * 3);

    console.log(parametro," ",array[random]);
    
    if((parametro == "piedra" && array[random] == "tijera") ||
        (parametro == "papel" && array[random] == "piedra") ||
        (parametro == "tijera" && array[random] == "papel")){
        console.log("Ganó");
    }else if (parametro == array[random]){
        console.log("Empató");
    }else{
        console.log("Perdió");
    }
}