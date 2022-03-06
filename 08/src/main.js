import { gsap } from 'gsap';

/** サンプル -------------------------------- */
gsap.to('.one', {
    //完了状態
    rotation: 180,
    x: 200,
    duration: 1,
    repeat: -1,
  },
  2  //2秒後に開始
);

gsap.from('.two', {
    //初期状態
    rotation: 180,
    x: 200,
    duration: 1,
    repeat: -1,
  },
  1  //1秒後に開始
);

gsap.fromTo('.three', 
  //初期状態
  {
    rotation: 180,
    x: 200,
  },
  //完了状態
  {
    rotation: 270,
    x: 400,
    duration: 1,
    repeat: -1
  },
  3  //3秒後に開始
);

gsap.fromTo('.three-2', 
  //初期状態
  {
    x: 0,
  },
  //完了状態
  {
    x: 400,
    duration: 1,
    repeat: 0
  },
  3  //3秒後に開始
);

gsap.set('.four', {
  rotation: 100,
  x: 200,
});



/** スライダー -------------------------------- */

const mainSlider = function() {
  console.log('mainSlider');
  const textPos = document.querySelector('.text-pos');
  const slider = document.querySelector('#main-slider');
  const navi   = document.querySelector('#num');
  const imgs   = document.querySelectorAll('#main-slider .img');
  const time   = 8000;
  const max    = imgs.length - 1;
  let wid = slider.clientWidth;
  let num      = 0;
  // let currentNum = 0;
  let itemF, itemFimg, past;
  let scale1   = wid * 0.1;
  let scale2   = wid * 0.2;
  //
  window.addEventListener('resize', () => {
    wid = slider.clientWidth;
  });
  slider.children[0].style.transform = 'translate3d(0, 0, 0)';

  const showImg = () => {
    if(num === 0) {
      past = max;
    } else {
      past = num-1;
    }

    //current item
    itemF = slider.children[num];
    let tl1 = gsap.timeline();
    tl1.to(itemF, {
      x: 0,
      z: 1,
      duration: 2,
      ease: Circ.easeInOut,
    })
    .to(itemF, {
      x: '-'+wid,
      z: 1,
      duration: 2,
      ease: Circ.easeInOut,
    },'+=6')  //6秒後に実行
    .to(itemF, {
      x: wid,
      z: 0,
      duration: 0,
    });

    //img translate
    itemFimg = itemF.children[0];
    console.log(itemFimg)
    let tl1img = gsap.timeline();
    tl1img.to(itemFimg, {
      x: scale1,
      duration: 2,
      ease: Expo.easeInOut,
    })
    .to(itemFimg, {
      x: scale2,
      duration: 2,
      ease: Expo.easeInOut,
    },'+=6')
    .to(itemFimg, {
      x: scale1,
      duration: 0,
    }, '+=1');

    //text
    let currentN = num;
    textPos.children[past].classList.remove('is-active');
    setTimeout(() => {
      textPos.children[currentN].classList.add('is-active');
    }, 2000);

    //navigation
    const naviN = '0'+(num + 1);
    setTimeout(() => {
      navi.innerHTML = naviN;
    }, 2000);

    //number
    if(num === max) {
      num = 0;
    } else {
      num += 1;
    }
  };

  //start slider
  showImg();
  setInterval(showImg, time);
}

window.addEventListener('load', function () {
  mainSlider();
});