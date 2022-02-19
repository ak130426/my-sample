const date1 = new Date('2022-12-01');
const date2 = new Date('2022-12-02');

console.log(date1 > date2);   //date1大なりdate2  false
console.log(date1 >= date2);  //date1はdate2以上  false
console.log(date1 < date2);   //date1小なりdate2  true
console.log(date1 <= date2);  //date1はdate2以下  true
//前の日付 < 後の日付


/* .getTime() 時間を取得する */
const time1 = date1.getTime();
const time2 = date2.getTime();
console.log(time1);    //1669852800000
console.log(time2);    //1669939200000
console.log(time1 < time2);    //true


/* 現在時刻について */
const now     = new Date(2022,1,19,12,50,44);
const nowTime = now.getTime();
const nowDate = now.getDate();
const nowHour = now.getHours();
const nowDay  = now.getDay();
const nowMonth= now.getMonth();
const nowYear = now.getFullYear();
console.log(now);        //Sat Feb 19 2022 12:50:44 GMT+0900 (日本標準時)
console.log(nowTime);    //1645242692461
console.log(nowDate);    //19
console.log(nowHour);    //12
console.log(nowDay);     //6
console.log(nowMonth);   //1  ：1月～12月を0～11で取得
console.log(nowYear);    //2022


/* 何日経過しているかを取得したい */
const check1 = new Date('2022/01/30');  //Sun Jan 30 2022 00:00:00 GMT+0900
const checkDate1 = check1.getDate();    //30


//.getDate()と+1した時の関係
const next1_1 = checkDate1 + 1;    //31
const next1   = check1.setDate(check1.getDate() + 1);  //1643554800000


//作成したDateオブジェクトに直接+1すると、次の日付（Dateオブジェクトのまま）になる
let check2 = new Date('2022/01/30');   //Sun Jan 30 2022 00:00:00 GMT+0900
check2.setDate(check2.getDate() + 1);  //Sun Jan 30 2022 00:00:00 GMT+0900
//新しい変数に代入すると数値になる
let result = check2.setDate(check2.getDate() + 1);  //1643641200000


/*
お題：特定の日付(targetDate)が、記録されている日付(recordedDate)の、次の日以降かどうかを判定したい
1 .getDate()で次の日かどうか判定
  例外：31日と次の月の1日の比較など、月またぎ・年またぎの場合
2 最初に不等号（>,<）で、大きさを比較する
　a,bがあり「a < b：aのほうが小さい＝aのほうが前(before)」であることがわかる

∴
targetDateが記録されている日付よりafterかどうか判定（2のやり方）
→true ：日付を取得（1のやり方）して「日付がイコールでなければ次の日」といえる
→false：お題の条件を満たさないので終了

※この場合「日付が変わっているか」を調べるだけで「24時間経過しているか」を判定するものではない

*/

const recordedDate = new Date(2022,0,31,23,59,00);  //Mon Jan 31 2022 23:59:00 ＝ 2022/01/31(月)23:59:00
console.log(recordedDate);
const targetDate   = new Date(2022,1,01,00,01,00);  //Tue Feb 01 2022 00:01:00 ＝ 2022/02/01(火)00:01:00
console.log(targetDate);

//targetDateがrecordedDateよりafterかどうか判定
console.log(targetDate > recordedDate);    //true

//日付が変わっているか判定
const dataR = recordedDate.getDate();  //31
const dataT = targetDate.getDate();    //1
console.log(dataT === dataR);          //false

//まとめ
if(targetDate > recordedDate) {
  if(dataT !== dataR) {
    console.log('特定の日付が、記録されている日付の次の日以降である');  //お題
  } else {
    console.log('特定の日付は、記録されている日付と同じ日付である');
  }
} else {
  console.log('特定の日付は、記録されている日付より以前の日付である');
}


/** 参考サイト
https://www.delftstack.com/ja/howto/javascript/how-to-compare-two-dates-with-javascript/
https://www.digitalocean.com/community/tutorials/javascript-unary-operators-simple-and-useful
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime


---- メモ ------------------------------------
.getTime()：
1970 年 1 月 1 日 00:00:00 UTC から指定した日時までの経過時間をミリ秒で表した数値。


*/
