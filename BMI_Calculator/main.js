const calculateBMI = (height, weight)=> {
    return Math.round(weight/(height * height));
};
const addNewDiv = (bmiIndex) => {
   const addDiv = document.createElement('div');
   addDiv.classList.add('added-div')
   addDiv.style.marginTop = '10px'
   const text = document.createTextNode(`The BMI value of the person is : ${bmiIndex}`);
   addDiv.appendChild(text);
   const container = document.querySelector('.container');
   container.appendChild(addDiv);
} 
const clearDivFirst= ()=>{
    let divThere = document.querySelector('.added-div')
    divThere ? divThere.remove() : false;
}
const calcBMI = document.querySelector('#calcBMI')
let divThere = document.querySelectorAll('.added-div')
document.querySelector('#submit-button')
calcBMI.addEventListener('click', e =>{
    clearDivFirst();
    const heightIp = document.querySelector('#height');
    const height = heightIp.value;
    const weightIp = heightIp.nextElementSibling.nextElementSibling;
    const weight = weightIp.value;
    let bmiIndex = calculateBMI(height, weight);
    addNewDiv(bmiIndex);
    
})

