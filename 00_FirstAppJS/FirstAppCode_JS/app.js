 // 1. Khai báo Element trong source code
 const buttonEl = document.querySelector('button');

 const inputEl = document.querySelector('input');

 const listEl = document.querySelector('ul');

 /**
  * Function add Goal
  */
 function addGoal() {
    const enteredValue = inputEl.value;

    const listItemEl = document.createElement('li');

    listItemEl.textContent = enteredValue;

    listEl.appendChild(listItemEl);

    inputEl.value = '';
 }

 // Set Event Listener for Button Element
 buttonEl.addEventListener('click', addGoal)

