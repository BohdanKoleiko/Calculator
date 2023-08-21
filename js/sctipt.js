'use strict'

document.addEventListener('DOMContentLoaded', () => {

   const display = document.querySelector('.calc__display');
   const btns = document.querySelector('.calc__buttons');
   const specialChars = ['/', '%', '*', '-', '+', '='];
   let output = '';
   let secOutput = '';
   let symbolOfChar = '';

   const calculate = function (btnContent) {
      const span = display.querySelector('span');

      if (btnContent.className !== 'calc__buttons') {

         if (btnContent.innerText === 'AC') {
            span.innerText = '0';
            output = '';
            secOutput = '';
            symbolOfChar = '';
         } else if (btnContent.innerText === 'DEL') {

            if (span.innerText.length !== 1 && span.innerText[0] !== '0') {
               output = span.innerText.slice(0, -1);
               span.innerText = output;
            } else if (span.innerText.length === 1 && span.innerText[0] !== '0') {
               span.innerText = '0';
               output = '';
            }

         } else if (btnContent.innerText === '=' && output !== '') {
            //console.log(output);
            output = eval(output);
            span.innerText = output
         } else {
            if (output === '' && specialChars.includes(btnContent.innerText)) return;

            output += btnContent.innerText;
            span.innerText = output;
         }

      }
   }

   btns.addEventListener('click', (e) => {
      const target = e.target;
      calculate(target);
   });
});