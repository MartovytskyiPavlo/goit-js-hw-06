// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const Refs = {
    inputEl: document.querySelector('#name-input'),
    outputEl:  document.querySelector('#name-output')
};

Refs.inputEl.addEventListener('input', (event) => {
     Refs.outputEl.textContent = event.currentTarget.value === '' ? 'Anonymous' : event.currentTarget.value;
});