const classList = [
  {
    'id': 100,
    'title': '新・初歩からのパソコン',  //科目名
    'place': '東京文京学習センター',    //学習センター
    'subject': '基盤科目',
    'number': '110',
    'people': '10名',
    'schedule': {
      1: '2022/04/23（土）1時限',
      2: '2022/04/23（土）2時限',
      3: '2022/04/23（土）3時限',
      4: '2022/04/23（土）4時限',
      5: '2022/04/24（日）1時限',
      6: '2022/04/24（日）2時限',
      7: '2022/04/24（日）3時限',
      8: '2022/04/24（日）4時限',
      9: '2022/04/24（日）試験・レポート',
    },
    'url': 'https://mensetsu-cnh.ouj.ac.jp/1/',
  },
  {
    'id': 200,
    'title': 'スワヒリ語初歩：東アフリカ入門',  //科目名
    'place': '東京文京学習センター',    //学習センター
    'subject': '基盤科目：外国語',
    'number': '110',
    'people': '18名',
    'schedule': {
      1: '2022/04/30（土）1時限',
      2: '2022/04/30（土）2時限',
      3: '2022/04/30（土）3時限',
      4: '2022/04/30（土）4時限',
      5: '2022/05/01（日）1時限',
      6: '2022/05/01（日）2時限',
      7: '2022/05/01（日）3時限',
      8: '2022/05/01（日）4時限',
      9: '2022/05/01（日）試験・レポート',
    },
    'url': 'https://mensetsu-cnh.ouj.ac.jp/1/',
  },
  {
    'id': 300,
    'title': '欧州ポルトガル語初歩',  //科目名
    'place': '東京文京学習センター',    //学習センター
    'subject': '基盤科目：外国語',
    'number': '110',
    'people': '10名',
    'schedule': {
      1: '2022/04/30（土）1時限',
      2: '2022/04/30（土）2時限',
      3: '2022/04/30（土）3時限',
      4: '2022/04/30（土）4時限',
      5: '2022/05/01（日）1時限',
      6: '2022/05/01（日）2時限',
      7: '2022/05/01（日）3時限',
      8: '2022/05/01（日）4時限',
      9: '2022/05/01（日）試験・レポート',
    },
    'url': 'https://mensetsu-cnh.ouj.ac.jp/1/',
  },
];

const selectedList = [];

class displayItem {
  constructor(div,list,head,btnType,item1,item2,item3,item4,item5,item6) {
    this.div   = document.querySelector(div);
    this.list  = list;
    this.head  = head;
    this.type  = btnType;
    this.prop1 = item1;
    this.prop2 = item2;
    this.prop3 = item3;
    this.prop4 = item4;
    this.prop5 = item5;
    this.prop6 = item6;
    this.str = '';
    this._init();
  }
  _init() {
    if(this.head === true) {
      this.str = '<table><thead><tr><th>&nbsp;</th><th>科目名</th><th>科目区分</th><th>場所</th><th>ナンバリング</th><th>定員</th></tr></thead>'
    } else {
      this.str = '<table>'
    }
    this.list.forEach( (item,i) => {
      this.str += '<tr>'
      if(this.type === 'add') {
        this.str += '<td><button type="button" data-num="'+item[this.prop1]+'">＋ 追加</button></td>'
      } else if(this.type === 'remove') {
        this.str += '<td><button type="button" data-num="'+item[this.prop1]+'">－ 削除</button></td>'
      }
      this.str += '<td>'+item[this.prop2]+'</td>'
              +'<td>'+item[this.prop3]+'</td>'
              +'<td>'+item[this.prop4]+'</td>'
              +'<td>'+item[this.prop5]+'</td>'
              +'<td>'+item[this.prop6]+'</td>'
              +'</tr>';
    });
    this.str += '</table>'
    this.div.innerHTML = this.str;
    console.log(this.str);
  }
}

function init() {

  new displayItem('#box',classList,true,'add','id','title','subject','place','number','people');

  function filterItem(List, Id) {
    return List.filter( item => {
      return item['id'] == Id;
    });
  }

  function selectItem(e){
    const _this = this;
    const thisId = _this.dataset.num;
    result = filterItem(classList, thisId);
    console.log(result);

    new displayItem('#selected',result,false,'remove','id','title','subject','place','number','people');

  }

  function addList() {
    const btns = document.querySelectorAll('button');
    console.log(btns);
    btns.forEach( btn => {
      btn.addEventListener('click', selectItem.bind(btn));
    });
  }

  //
  // showAll(classList);
  addList();


}

//
window.addEventListener('DOMContentLoaded', function() {
  init();
});

