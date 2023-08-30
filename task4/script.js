const testTextField = document.querySelector('#testTextField');

testTextField.addEventListener('click', () => {
   const linkText = prompt('введите текст');
   testTextField.textContent = linkText; 
})
