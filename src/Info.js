// Info.js
import React from "react";
import "./styles/style.css"; // 直接import就可以套用style.css的樣式，在style.css裡面有設定class為info的標籤的樣式

// 使用JSX語法製作一個component，就是一個function，function的名稱要跟檔案名稱一樣
// 重要的東西就是一個function的return只能有一個東西(一個區塊div or nav...)
//  就是你要在component裡面放很多標籤的話JSX語法就是function只能return一個區塊(div、nav、section...)，所以所有的標籤就要包在div標籤(or nav...)裡面，讓function去return唯一的標籤

// JSX特殊語法1
// 在大括號 { } 內編寫expression，就是在component中放入JS語法的作法
// Expression就是會算出一個值的操作，像是變數3會算出3，3*5會算出15，function hello()如果沒return東西的話就會算出undefined。
// 如果我們要顯示很多內容的話，通常我們會用expression中寫array.prototype.map()，因為arr.map(callbackFn) : 創建一個新的空array，arr這個陣列中的每個元素執行callback function後return的值就會添加到這個新array中。所以array.map最後就會return這個新的array。
// 在expression中要用變數的話就要用{}把變數名稱包起來。

// // JSX特殊語法2
// 在JSX裡面的HTML標籤的class都要寫成className，因為在JavaScript中class是一個保留的字。React編譯後會自動換成class

// Component屬性
// App Component在使用Info組件時給的屬性就會被帶入到props中，因此可以看到props物件中有name屬性與age屬性
const Info = (props) => {
  return (
    <div className="info">
      <p>朋友名稱:{props.name}</p>
      <p>朋友年齡:{props.age}</p>
    </div>
  );
};

// expression給我們的應該會是一個[ <p>小明</p> , <p>小華</p> , <p>小張</p>]的array，那我們看到的不是這樣的原因是
// React要去render一個array的時候會把中括號[] , 的部份去掉

export default Info;
