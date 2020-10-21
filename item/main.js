'use strict';

let book = 
{
  title:'Java',
  price:'2500',
  stock:'3'
};

document.getElementById('title').textContent = book.title;
document.getElementById('price').textContent = book.price;
document.getElementById('stock').textContent = book.stock;


// for(let p in book){
//   console.log(p + '=' + book[p]);
// }
// for(let p in book){
//   console.log(book[p]);
// }
// for(let p in book){
//   console.log(p);
// }