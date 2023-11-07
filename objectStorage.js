let myObj={
    name:'ashu',
    age:27,
    obj:{
      name:'raju',
      age:56,
    }
    
}

let myObj_serialized =JSON.stringify(myObj);
console.log(myObj_serialized);

localStorage.setItem("myObj",myObj_serialized);

let myObj_deserilized = JSON.parse(localStorage.getItem('myObj'));