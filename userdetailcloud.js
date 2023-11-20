const myForm = document.querySelector('#my-form');
        const nameInput = document.querySelector('#name');
        const emailInput = document.querySelector('#email');
        const userList = document.querySelector('#users');

        let storedUsers = [];

        myForm.addEventListener('submit', onSubmit);

        function onSubmit(e) {
            e.preventDefault();

            const name = nameInput.value;
            const email = emailInput.value;

            if (name && email) {
                const user = { name, email };

                axios.post('https://crudcrud.com/api/5222ab7cced44dd59faec98d87a210a0/appointmentData', user)
                    .then(res => {
                        storedUsers.push(res.data);
                        renderUsers(storedUsers);
                    })
                    .catch(err => console.error(err));

                nameInput.value = '';
                emailInput.value = '';
            }
        }

        function renderUsers(users) {
            userList.innerHTML = users.map(user => `<li>${user.name}: ${user.email}
            <button class="deletebtn" data-id="${user._id}">Delete</button>
            <button class="editbtn" data-id="${user._id}">Edit</button>
            </li>`).join('');
        }

        function fetchData() {
            axios.get('https://crudcrud.com/api/5222ab7cced44dd59faec98d87a210a0/appointmentData')
                .then(response => {
                    storedUsers = response.data;
                    renderUsers(storedUsers);
                })
                .catch(err => console.error(err));
        }

        fetchData(); 

        userList.addEventListener('click', onDelete);

        function onDelete(e) {
            if (e.target.classList.contains('deletebtn')) {
                const userId = e.target.getAttribute('data-id');
                axios.delete(`https://crudcrud.com/api/5222ab7cced44dd59faec98d87a210a0/appointmentData/${userId}`)
                    .then(() => {
                        storedUsers = storedUsers.filter(user => user._id !== userId);
                        renderUsers(storedUsers);
                    })
                    .catch(err => console.error(err));
            }
        }

        userList.addEventListener('click', onEdit);

        function onEdit(e) {
            if (e.target.classList.contains('editbtn')) {
                const userId = e.target.getAttribute('data-id');
                const userToEdit = storedUsers.find(user => user._id === userId);

                const editedName = prompt('Enter edited name:', userToEdit.name);
                const editedEmail = prompt('Enter edited email:', userToEdit.email);

                if (editedName !== null && editedEmail !== null) {
                    const editedUser = { name: editedName, email: editedEmail };

                    axios.put(`https://crudcrud.com/api/5222ab7cced44dd59faec98d87a210a0/appointmentData/${userId}`, editedUser)
                        .then(() => {
                            fetchData(); 
                        })
                        .catch(err => console.error(err));
                }
            }
        }