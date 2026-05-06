const bookName = document.querySelector('#book-name')
const author = document.querySelector('#book-author')
const genre = document.querySelector('#book-genre')
const btn = document.querySelector('#submit-button')
function createlistByValue(){
// change the names of variable to avoid temporal dead zone 
let bookNameVal = bookName.value
let authorVal = author.value
let genreVal  = genre.value
let newDiv1 = createDiv(bookNameVal, authorVal, genreVal)
createButtonCross(newDiv1);
createButtonEdit(newDiv1);
}
function createDiv(bookNameVal, authorVal, genreVal){
    const optcntr= document.querySelector('#output-container-lists')
    const listDiv = document.createElement('div')
    listDiv.classList.add = 'list-div'
    listDiv.innerHTML += `<li>${bookNameVal}</li>`
    listDiv.innerHTML += `<li>${authorVal}</li>`
    listDiv.innerHTML += `<li>${genreVal}</li>`
    optcntr.appendChild(listDiv)
    return listDiv
}
function createButtonCross(newDiv1){
    const btn1 = document.createElement('button')
    btn1.classList.add = 'cross-btn'
    btn1.textContent = 'X'
    newDiv1.appendChild(btn1)
    btn1.addEventListener('click',function(){
    //we could use removeChild()  method
    newDiv1.remove();
    })

}
//Edit button not working!!!!!!!!!!!!!!!!!!!
function createButtonCross(newDiv1){
    const btn2 = document.createElement('button')
    btn2.classList.add = 'edit-btn'
    btn2.textContent = 'Edit'
    newDiv1.appendChild(btn2)
    btn2.addEventListener('click',function(){
    
    })
    
}

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    createlistByValue()
})