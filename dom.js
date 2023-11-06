let item=document.getElementsByClassName('list-group-item');
item[2].style.backgroundColor='green';

let items=document.getElementsByClassName('list-group');
items.style.fontWeight='bold';

let li=document.getElementsByTagName('li');
for(let i=0;i<li.length;i++){
    li[i].style.backgroundColor='#f4f4f4';
}
