console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const promiseWifeBringingTickets = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const getCandy =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('candy'), 3000);
  });
  
   const getCoke =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('coke'), 3000);
  });

  const getColDrink =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('colddrinks'), 3000);
  });


  let ticket = await promiseWifeBringingTickets;
  
    let [ popcorn, candy, coke,colddrinks ] =
    await Promise.all([ getPopcorn, getCandy, getCoke ,getColDrink ]);

    console.log(`got ${popcorn}, ${candy}, ${coke} , ${colddrinks}`);

  
  return ticket;
  
};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');
