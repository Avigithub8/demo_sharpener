// let item=document.getElementsByClassName('list-group-item');
// item[2].style.backgroundColor='green';

// let items=document.getElementsByClassName('list-group');
// items.style.fontWeight='bold';

// let li=document.getElementsByTagName('li');
// for(let i=0;i<li.length;i++){
//     li[i].style.backgroundColor='#f4f4f4';
// }


let lst=document.querySelector('.list-group-item:nth-child(2)');
lst.style.backgroundColor='green';

let list=document.querySelector('.list-group-item:nth-child(3)');
list.style.display='none';

let item=document.querySelectorAll('li');
item[1].style.color='red';


let odd=document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}