//ポップアップ設定
const Popup = {
  _init(thisData) {
      const closeBtn   = document.querySelector('#modal-close') ? document.querySelector('#modal-close') : '';
      const popContent = document.querySelector('#popup') ? document.querySelector('#popup') : '';
      const data = thisData;

      popContent.classList.add('is-show');
      Popup._close(closeBtn, popContent, data);
  },
  _close(btn, popContent, data) {
      btn.addEventListener('click', () => {
          popContent.remove();
          setStrage._setItem('targetUrl', data);
      });
  },
  _remove() {
      const popContent = document.querySelector('#popup') ? document.querySelector('#popup') : '';
      if(popContent) popContent.remove();
  }
};

//localStrage設定
const setStrage = {
  //データ格納
  _setItem(k, data) {
    localStorage.setItem(k, JSON.stringify(data));
  },
  //データ取得
  _getItem(k) {
      return localStorage.getItem(k)
  },
  //データ削除
  _clear(k) {
      localStorage.removeItem(k);
  },
  //日付に変換
  _formatStr(str){
    (str.slice(0, 13)).replace(/-/g,'/').replace(/T/g,'/');
    return new Date(str);
  }
};

//ポップアップ表示
const setPopup = {
  _init() {
      const thisUrl = location.pathname;
      const today = new Date();
      console.log(today);
      let thisData = {
        target: false,  //true:見た,false:見ていない
        expiry: today
      }
      console.log(thisData['expiry']);

      const strageItem = setStrage._getItem('targetUrl');
      const formatItem = JSON.parse(strageItem);

    //トップページ
    if(thisUrl == '/') {
        //strageがある：日付を比較して次の日には再表示
        if(strageItem) {
            //訪問履歴あり
            if(formatItem.target === true) {
                Popup._remove();

            } else {
                const thisDayTime = new Date();
                const expiryDay = setStrage._formatStr(formatItem.expiry);
                //次の日以降なら表示する
                if(thisDayTime > expiryDay) {
                    if(thisDayTime.getDate() !== expiryDay.getDate()) {
                        console.log(thisDayTime.getDate())
                        console.log(expiryDay.getDate())
                        thisData['expiry'] = thisDayTime;
                        Popup._init(thisData);
                    } else {
                        // console.log('同じ日です')
                    }
                }
            }
        //strageがない：ポップアップ表示、日付を残す
        } else {
            thisData['expiry'] = new Date();
            Popup._init(thisData);
        }

    //トップページ以外
    } else {
        //特定のページ：履歴・日付を残す
        if(thisUrl.match(/newlifesupportcp2022/) || thisUrl.match(/02/)) {
            data = {
                target: true,
                expiry: new Date()
            }
            setStrage._setItem('targetUrl', data);
        } else {
            Popup._remove();
        }
    }

    //データ削除
    if(thisUrl.match(/03/)) {
        setStrage._clear('targetUrl');
    }

  }
}

window.addEventListener('load', function() {
  const result = setPopup._init();
});
