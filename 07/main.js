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

function init() {
  const box      = document.querySelector('#box');
  const selected = document.querySelector('#selected');
  let str = '';

  function showAll(list) {
    str = '<table><thead><tr><th></th><th>科目名</th><th>科目区分</th><th>場所</th><th>ナンバリング</th><th>定員</th></tr></thead>'
    list.forEach( item => {
      id = item['id'];
      title = item['title'];
      subject = item['subject'];
      place = item['place'];
      number = item['number'];
      people = item['people'];
      console.log(item);
      console.log(title);
      console.log(subject);
      str += '<tr>'
              +'<td><button type="button" data-num="'+id+'">＋ 追加</button></td>'
              +'<td>'+title+'</td>'
              +'<td>'+subject+'</td>'
              +'<td>'+place+'</td>'
              +'<td>'+number+'</td>'
              +'<td>'+people+'</td>'
              +'</tr>';
    });
    str += '</table>'

    box.innerHTML = str;
    // console.log(str);
  }
  
  function filterItem(List, Id) {
    return List.filter( list => {
      return list['id'] == Id;
    });
  }

  function addList() {
    const btns = document.querySelectorAll('button');
    console.log(btns);
    btns.forEach( btn => {
      btn.addEventListener('click', function(){
        const thisId = btn.dataset.num;
        result = filterItem(classList, thisId);
        console.log(result);

        function showSelected(list) {
          str = '<div class="select-wrap"><table><tr>'
          list.forEach( item => {
            id = item['id'];
            title = item['title'];
            subject = item['subject'];
            place = item['place'];
            number = item['number'];
            people = item['people'];
            console.log(item);
            console.log(title);
            console.log(subject);
            str += '<td><button type="button" data-num="'+id+'">＋ 削除</button></td>'
                    +'<td>'+title+'</td>'
                    +'<td>'+subject+'</td>'
                    +'<td>'+place+'</td>'
                    +'<td>'+number+'</td>'
                    +'<td>'+people+'</td>'
          });
          str += '</tr></table></div>'
          selected.innerHTML = str;
          // console.log(str);
        }
        showSelected(result);

      });
    });
  }

  //
  showAll(classList);
  addList();


}

//
window.addEventListener('DOMContentLoaded', function() {
  init();
});

