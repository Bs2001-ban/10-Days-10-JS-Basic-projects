colorArr =[ 'red', 'green' , 'lightyellow' , 'purple' ]
let index = 0;
const startR = document.querySelector('#startWithRandom')
const startT = document.querySelector('#startWithTraditional')
const stop = document.querySelector('#stop')


const funcChangeColorTraditional = () => { 
    document.body.style.backgroundColor = colorArr[index];
    index = index + 1
    if(colorArr.length == index){
         index = 0;
    }
}
const funcChangeColorRandom = () => { 
  let colorString = '123456ABCDEFG'
  let color = '#';
  for( let i = 0 ; i < 6 ; i++  ){
    const index = Math.round(Math.random() * 12 );
    color += colorString[index];
  }
   console.log(color)
   document.body.style.backgroundColor = color;
}
let clrT;
let clrR;
startR.addEventListener('click',()=>{
    clearInterval(clrT)
    clrR = setInterval(funcChangeColorRandom, 2000)
   
})

startT.addEventListener('click',()=>{
    clearInterval(clrR)
    clrT = setInterval(funcChangeColorTraditional, 2000)

})
stop.addEventListener('click',()=>{
    clearInterval(clrR)
    clearInterval(clrT)
    //we can set them clrR = null and when using startR we can check
    // if(!clrT){
    //clrR = setInterval(funcChangeColorRandom, 2000)} -- Just a clean code nothing else
        
})
