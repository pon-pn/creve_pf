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

  /* スライドショー
============================================================================================================ */
$(function(){
  const $setElm = $('.viewer'),
  fadeSpeed = 1500,
  switchDelay = 5000;

  $setElm.each(function(){
      const targetObj = $(this);
      const findUl = targetObj.find('ul');
      const findLi = targetObj.find('li');
      const findLiFirst = targetObj.find('li:first');

      findLi.css({display:'block',opacity:'0',zIndex:'99'});
      findLiFirst.css({zIndex:'100'}).stop().animate({opacity:'1'},fadeSpeed);

      setInterval(function(){
          findUl.find('li:first-child').animate({opacity:'0'},fadeSpeed).next('li').css({zIndex:'100'}).animate({opacity:'1'},fadeSpeed).end().appendTo(findUl).css({zIndex:'99'});
      },switchDelay);
  });
});
 

jQuery(function ($) {
  $('.js-accordion-title').on('click', function () {
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(200);
    /*矢印の向きを変更*/
    $(this).toggleClass('open', 200);
  });
  
  });

}