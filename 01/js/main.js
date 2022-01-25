"use strict";

const btn    = document.getElementById('btn');
const result = document.getElementById('result');
const child  = document.createElement('p');

btn.addEventListener('click', () => {
  const today = new Date();
  child.innerHTML = '今は'+(today.getMonth()+1)+'月'+today.getDate()+'日'+today.getHours()+'時'+today.getMinutes()+'分'+today.getSeconds()+'秒です。';
  result.appendChild(child);

});
