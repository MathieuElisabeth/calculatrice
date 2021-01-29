let touchs = ['CE', 'C', 'history', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', ' ', '0', ' ', '='];

const keybord = document.querySelector('.keybord');
const first_screen = document.querySelector('.first-number');
const second_screen = document.querySelector('.last-number');
let history_screen = document.querySelector('.history-calcul');
let resultat = [];


  for (let i = 0; i < touchs.length; i++) {
    let div = document.createElement('div');
    div.classList.add("button");
    if(touchs[i] === "history"){
      div.innerHTML = '<i class="fas fa-history"></i>'
      div.classList.add("history");
    }else {
      div.innerHTML = touchs[i]
    }
    keybord.appendChild(div)

    if(touchs[i].split(" ").join("") === ""){
      div.classList.remove("button");
      div.classList.add("button-none");
    }else if(touchs[i] === "÷"){
      div.classList.add("division");
    }else if(touchs[i] === "×"){
      div.classList.add("multiplication");
    }else if(touchs[i] === "-"){
      div.classList.add("soustraction");
    }else if(touchs[i] === "+"){
      div.classList.add("addition");
    }else if(touchs[i] === "C" || touchs[i] === "CE" || touchs[i] === "+"){
      div.classList.add("action-btn");
    }

    if (Number(touchs[i]) || touchs[i] === '0'){
      div.addEventListener('click',() => {first_screen.innerHTML += touchs[i];  } )
      }else if(touchs[i] === "CE"){
        div.addEventListener('click',() => {first_screen.innerHTML = ''} )
      }else if(touchs[i] === "C"){
        div.addEventListener('click',() => {
          first_screen.innerHTML = '';
          second_screen.innerHTML = '';
          resultat = []
        })
      }else if(touchs[i] === "="){
        div.addEventListener('click',() => {
          resultat.push(first_screen.innerHTML)
          second_screen.innerHTML  += first_screen.innerHTML;
          first_screen.innerHTML = eval(resultat.join(' '));
          let div = document.createElement('div');
          history_screen.appendChild(div)
          div.classList.add("last-calcul");
          div.innerHTML =`${second_screen.innerHTML} = <span> ${eval(resultat.join(' '))}</span>`;
          resultat = []; 
        })
      }
  }

let division = document.querySelector('.division');
let multiplication = document.querySelector('.multiplication');
let soustraction = document.querySelector('.soustraction');
let addition = document.querySelector('.addition');

division.addEventListener('click',() => {
  if(resultat.length === 0){
    second_screen.innerHTML = '';
  }
  resultat.push(first_screen.innerHTML)
  resultat.push('/')
    if(Number(second_screen.innerHTML)){
       second_screen.innerHTML += '÷';
      } else{
      second_screen.innerHTML += first_screen.innerHTML + '÷' ;
      first_screen.innerHTML = '';
      }
    })

multiplication.addEventListener('click',() => {
  if(resultat.length === 0){
    second_screen.innerHTML = '';
  }
  resultat.push(first_screen.innerHTML)
 resultat.push('*')
   if(Number(second_screen.innerHTML)){
      second_screen.innerHTML += '×';
     } else{
      second_screen.innerHTML += first_screen.innerHTML + '×' ;
      first_screen.innerHTML = '';
      }
    })

soustraction.addEventListener('click',() => {
  if(resultat.length === 0){
    second_screen.innerHTML = '';
  }
  resultat.push(first_screen.innerHTML)
  resultat.push('-')
    if(Number(second_screen.innerHTML)){
      second_screen.innerHTML += '-';
      } else{
      second_screen.innerHTML += first_screen.innerHTML + '-' ;
      first_screen.innerHTML = '';
      }
    })

addition.addEventListener('click',() => {
  if(resultat.length === 0){
    second_screen.innerHTML = '';
  }
  resultat.push(first_screen.innerHTML)
  resultat.push('+')
    if(Number(second_screen.innerHTML)){
      second_screen.innerHTML += '+';
       } else{
      second_screen.innerHTML += first_screen.innerHTML + '+' ;
      first_screen.innerHTML = '';
      }
    })

let history = document.querySelector('.history');

history.addEventListener('click',() => {
  if(history_screen.style.transform === 'scaleY(1)'){
  history_screen.style.transform = 'scaleY(0)';
  }else{
    history_screen.style.transform = 'scaleY(1)';
  }
})

let last_calcul = document.getElementsByClassName('last-calcul');
let trash = document.querySelector('.clear');

trash.addEventListener('click', () => {
  while (last_calcul[0]) {
    last_calcul[0].parentNode.removeChild(last_calcul[0]);
  }
})
