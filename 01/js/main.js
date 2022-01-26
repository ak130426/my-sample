"use strict";

const btn    = document.getElementById('btn');
const result = document.getElementById('result');
const child  = document.createElement('p');

btn.addEventListener('click', () => {
  const today = new Date();
  const month_ = today.getMonth()+1;
  const month  = ('0' + month_).slice(-2);
  const date_  = today.getDate();
  const date   = ('0' + date_).slice(-2);
  const hours  = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();

  child.innerHTML = '今は'+month+'月'+date+'日'+hours+'時'+minute+'分'+second+'秒です。';
  result.appendChild(child);

});
