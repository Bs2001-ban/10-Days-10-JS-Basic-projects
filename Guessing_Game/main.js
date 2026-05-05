const mainNum = Math.round(Math.random() * 100 + 1)
const form = document.querySelector('.main-form')
const btn = document.querySelector('#submit-button')
const prevGuessDiv = document.querySelector('.previous-guess')
const num = document.querySelector('#placedNumber')
// we could use nextElementSibling on that

const remainingDiv = prevGuessDiv.parentNode.children[1];
const highlowCalcsDiv = prevGuessDiv.parentNode.children[2];
function createTxtNdeForAll(div, content){
        const txtNode = document.createTextNode(`${content}`);
        div.appendChild(txtNode);
}

let flag = 0;
const compareNum = (getNum , mainNum ) => {

    if(getNum > mainNum){
        createTxtNdeForAll(highlowCalcsDiv , 'Number is Too HIGH')
    }
    else if(parseInt(getNum) === mainNum){
        createTxtNdeForAll(highlowCalcsDiv , 'You have got the exact Number')
        flag = 1;
    }
    else{
        createTxtNdeForAll(highlowCalcsDiv , 'Number is Too LOW')
    }
}
//Could hav add  settimeout 
function removeAllTextNodes(div){
   const txtNode = div.childNodes[1];
   if(txtNode){
   txtNode.remove();
   }
}
let Totalguess = 10;
const remainingGuess = () =>{  
    if(Totalguess > 0 && flag === 0){
        Totalguess--;
        createTxtNdeForAll(remainingDiv,`${Totalguess}`) 
        
    }
    else{
        btn.disabled = true;
        removeAllTextNodes(highlowCalcsDiv)
        createTxtNdeForAll(highlowCalcsDiv, `The exact Number was ${mainNum}`);
        startGameAgain();
    }
 
 }

const prevGuesses = (element) =>{
    createTxtNdeForAll(prevGuessDiv,`${element} `)

}
//queySelector('#id').value ommiteed in this call
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    removeAllTextNodes(highlowCalcsDiv)
    removeAllTextNodes(remainingDiv)
    const getNum = e.target.previousElementSibling.value;
    compareNum(getNum, mainNum)
    remainingGuess()
    prevGuesses(getNum)
})

const btn_again = document.createElement('button')
function startGameAgain() {
    btn_again.id = 'added-btn'
    btn_again.style.marginTop = '10px'
    btn_again.textContent = "Try Again";
    console.log(btn_again)
    document.querySelector('#output-div').appendChild(btn_again);
   
}

 btn_again.addEventListener('click', function() {
        location.reload();
    })
