'use strict';

let todo = ['a', 'b', 'c', 'd'];
todo.push('e');
for(let item of todo){
  const li = `<li>${item}</li>`;
  document.getElementById('list').insertAdjacentHTML('beforeend', li);
}

