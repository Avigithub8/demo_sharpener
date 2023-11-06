// let item=document.getElementsByClassName('list-group-item');
// item[2].style.backgroundColor='green';

// let items=document.getElementsByClassName('list-group');
// items.style.fontWeight='bold';

// let li=document.getElementsByTagName('li');
// for(let i=0;i<li.length;i++){
//     li[i].style.backgroundColor='#f4f4f4';
// }


// let lst=document.querySelector('.list-group-item:nth-child(2)');
// lst.style.backgroundColor='green';

// let list=document.querySelector('.list-group-item:nth-child(3)');
// list.style.display='none';

// let item=document.querySelectorAll('li');
// item[1].style.color='red';


// let odd=document.querySelectorAll('li:nth-child(odd)');
// for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
// }


console.log(document);
console.log(document.parentElement);
console.log(document.lastElementChild);
console.log(document.lastChild);
console.log(document.createchild);
console.log(document.firstElementChild);
console.log(document.firstChild);
console.log(document.nextSibling);
console.log(document.nextElementSibling);
console.log(document.previousSibling);
console.log(document.previousElementSibling);
console.log(document.createElement('li'));
console.log(document.setAttribute);
console.log(document.createTextNode('text'));
console.log(document.appendChild);


let title=document.querySelector('h2.title');
let parentElement=title.parentElement;
console.log(parentElement);

let ulElement=document.getElementById('items');
let lastElementChild=ulElement.lastElementChild;
console.log(lastElementChild);

let ul=document.getElementById('items');
let lastChild=ul.lastChild;
console.log(lastChild);




let firstElement=document.getElementById('items');
let firstElementChild=firstElement.firstElementChild;
console.log(firstElementChild);

let first=document.getElementById('items');
let firstChild=first.firstChild;
console.log(firstChild);

let uln=document.getElementById('items');
let nextSibling=uln.nextSibling;
console.log(nextSibling);

let ulnElement=document.getElementById('items');
let nextElementSibling=ulnElement.nextElementSibling;
console.log(nextElementSibling);


let ulp=document.getElementById('items');
let previousSibling=ulp.previousSibling;
console.log(previousSibling);

let ulpElement=document.getElementById('items');
let previousElementSibling=ulpElement.previousElementSibling;
console.log(previousElementSibling);

let newElement=document.createElement('li');
newElement.setAttribute('class','list-group-item');
newElement.textContent='Item 6';
console.log(newElement);

let itemList=document.getElementById('items');
itemList.appendChild(newElement);