//single element
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('h1'));

//Multiple element
//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('li'));
// const ul=document.querySelector('.items');
//ul.remove();
//for edit
//ul.lastElementChid.remove();
//ul.firstElementChild.textContent='Hello';
//ul.children[1].innerHTML='Brad';
//ul.lastElementChild.innerHTML='<h1>Hello</h1>';


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    
    localStorage.setItem('email',emailInput.value);
    localStorage.setItem('name',nameInput.value);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}