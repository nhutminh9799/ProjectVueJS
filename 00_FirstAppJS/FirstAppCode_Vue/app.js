Vue.createApp({
   
   //Data Information Of Vue App
   data() {
      return {
         goals: [],
         enterEl: ''
      };
   },

   methods: {
      /**
       * Add Goal Function
       */
      addGoal() {
         if(this.enterEl != '') {
         //Push enterEl into goals
         this.goals.push(this.enterEl);
         this.enterEl = ''
         }
         
      }
   }
}).mount('#app');


//  const buttonEl = document.querySelector('button');

//  const inputEl = document.querySelector('input');

//  const listEl = document.querySelector('ul');

//  function addGoal() {
//     const enteredValue = inputEl.value;

//     const listItemEl = document.createElement('li');

//     listItemEl.textContent = enteredValue;

//     listEl.appendChild(listItemEl);

//     inputEl.value = '';
//  }

//  buttonEl.addEventListener('click', addGoal)

