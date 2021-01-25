'use strict';

{
  // ハンバーガーメニュー→まずは必要な要素を取得
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    // まずはoverlayを表示させる→クリックするとshowクラスが追加されるよ
    overlay.classList.add('show');
    // overlay表示中はopenアイコンを消してるよ
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    // remove指定
    overlay.classList.remove('show');
    // remove指定
    open.classList.remove('hide');
  });



}