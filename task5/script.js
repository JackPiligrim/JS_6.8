let button = document.querySelector('button');
let input = document.querySelector('input');
let pText = document.querySelector('#duplicateField');

let inputText = '';

input.addEventListener('input',() => {
	inputText = input.value;
	pText.textContent = inputText;
})

button.addEventListener('click',()=>{
	console.log(inputText);
	input.value = '';
	pText.textContent = '';
})