let form=document.getElementById('addForm');
let listItem=document.getElementById('items');
let filter=document.getElementById('filter');
let edit=document.getElementById('edit')
//form submit
form.addEventListener('submit',addItems);

//delete item
listItem.addEventListener('click',removeItem);

//filter event
filter.addEventListener('keyup',filterItems);

//editbtn
edit.addEventListener('click',editItems);

function addItems(e){
    e.preventDefault();

    // Get input value
     let inputItem=document.getElementById('item').value;
      
     let inputdes=document.getElementById('description').value;
  
    // create new li element
    let li=document.createElement('li');
      
    //add name of this class
    li.className='list-group-item';
    

    //add text node with input value
    let addtext=document.createTextNode(inputItem + ' ');
    
    let adddes=document.createTextNode(inputdes);

    // append the text node in list
    li.appendChild(addtext);
    li.appendChild(adddes);

    // create delete btn
    let delBtn=document.createElement('button');

    delBtn.className='btn btn-danger btn-sm float-right delete';
    
    // add text node 
    let addCross=document.createTextNode('X');
    
    // append text node
    delBtn.appendChild(addCross);
    
    // append delete btn to list
    li.appendChild(delBtn);

    
   

    let editBtn=document.createElement('button');
    editBtn.className='btn btn-sm float-right editbtn';
    editBtn.appendChild(document.createTextNode('EDIT'));
    li.appendChild(editBtn);

    // append list to list item
    listItem.appendChild(li);

    document.getElementById('item').value='';
    document.getElementById('description').value='';
   
}


function removeItem(e){
    e.preventDefault();

    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            let li=e.target.parentElement;
            listItem.removeChild(li);
        }
    }
}


function filterItems(e){
    e.preventDefault();

    let text=e.target.value.toLowerCase();

    let items=listItem.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        let itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    })
}


function editItems(e){
    e.preventDefault();

    if(e.target.classList.contains('editbtn')){
        let li=e.target.parentElement;

        let itemText=li.firstChild.textContent.trim();
        let itemDescription=li.childNodes[1].textContent.trim();
        
        let newText=prompt('Edit Item:',itemText);
        let newDes=prompt('Edit Desc:',itemDescription);

        if(newText!==null && newDes!==null){
            li.firstChild.textContent=newText + ' ';
            li.childNodes[1].textContent=newDes;
        }
    }
}
