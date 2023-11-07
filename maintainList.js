const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const userList = document.querySelector('#users');


const storedUsers = JSON.parse(localStorage.getItem('users'))||[];

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  const name = nameInput.value ;
  const email = emailInput.value;

  if(name && email){
    const user={name,email};

    storedUsers.push(user);

    renderUsers(storedUsers);

    localStorage.setItem('users',JSON.stringify(storedUsers));

    nameInput.value = '';
    emailInput.value = '';
  }

  
}

function renderUsers(users){
    userList.innerHTML=users.map(user=> `<li>${user.name}: ${user.email}</li>`).join('');
};

renderUsers(storedUsers);
