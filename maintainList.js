const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const userList = document.querySelector('#users');


const storedUsers = JSON.parse(localStorage.getItem('users'))||[];

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

userList.addEventListener('click',onDelete);

function onSubmit(e) {
  e.preventDefault();
  
  const name = nameInput.value ;
  const email = emailInput.value;

  if(name && email){
    const user={name,email};

    storedUsers.push(user);

    renderUsers(storedUsers);

    localStorage.setItem('users',JSON.stringify(storedUsers));
    localStorage.removeItem('users[1]');
    nameInput.value = '';
    emailInput.value = '';
  }

  
}

function renderUsers(users){
    userList.innerHTML=users.map((user,i)=> `<li>${user.name}: ${user.email}
    <button class="deletebtn" index="${i}">Delete</button>
    </li>`).join('');
};

renderUsers(storedUsers);


 function onDelete(e) {
    if (e.target.classList.contains('deletebtn')) {
        const idx = e.target.getAttribute('index');
        storedUsers.splice(idx, 1);
        renderUsers(storedUsers);
        localStorage.setItem('users', JSON.stringify(storedUsers));
    }
};