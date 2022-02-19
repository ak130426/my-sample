//ポップアップ設定
const Popup = {
  _init() {
      const closeBtn   = document.querySelector('#modal-close') ? document.querySelector('#modal-close') : '';
      const popContent = document.querySelector('#popup') ? document.querySelector('#popup') : '';

      popContent.classList.add('is-show');
      Popup._close(closeBtn, popContent);
  },
  _close(btn, popContent) {
      btn.addEventListener('click', () => {
          popContent.remove();
          setStrage._setItem('targetUrl', true);
      });
  },
  _remove() {
      const popContent = document.querySelector('#popup') ? document.querySelector('#popup') : '';
      popContent.remove();
  }
};

//localStrage設定
const setStrage = {
  //データ格納
  _setItem(k, v) {
      localStorage.setItem(k, v);
  },
  //データ取得
  _getItem(k) {
      return localStorage.getItem(k)
  },
  //データ削除
  _clear(k) {
      localStorage.removeItem(k);
  }
};

//ポップアップ表示
const setPopup = {
  _init() {
      //URL取得
      const thisUrl = location.pathname;
      console.log(thisUrl);

      const today = new Date();
      console.log(today);

      //localStrage取得
      const strageItem = setStrage._getItem('targetUrl');
      //トップページ判定
      if(thisUrl == '/') {
          Popup._init();
          if(strageItem) {
              Popup._remove();
          }
      } else {
          Popup._remove();
      }
      if(!strageItem) {
          if(thisUrl.match('/newlifesupportcp2022/') || thisUrl.match('/inquiry/') || thisUrl.match('/reservation/')) {
              setStrage._setItem('targetUrl', true);
          }
      }
      //データ削除
      if(thisUrl.match('/site/')) {
          setStrage._clear('targetUrl');
      }
      
  }
}

window.addEventListener('load', function() {
  const result = setPopup._init();
});

/*
//localStrage設定
const setStrage = {
  //データ格納
  _setItem(k, data) {
      localStorage.setItem(k, JSON.stringify(data));
  },
  //データ取得
  _getItem(k) {
      let s = localStorage[k];
      // if(s === undefined) {
      //     return undefined;
      // }
      s = JSON.parse(s);
      if(new Date(s.expire) > new Date()) {
          return s.target;
      } else {
          localStorage.removeItem(k);
          return undefined;
      }
  },
  //データ削除
  _clear(k, d) {
      localStorage.removeItem(k);
  }
};

let data = {
  target: true,
  expire: null
}
setStrage._setItem('test', data);

------------------------
data = {
    target: true,
    expire: '2050/02/01 00:00'
}
setStrage._setItem('test', data);

*/
