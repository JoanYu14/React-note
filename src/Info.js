// Info.js
import React, { useState } from "react";
import "./styles/style.css"; // 直接import就可以套用style.css的樣式，在style.css裡面有設定class為info的標籤的樣式

// State(狀態)
// 在React當中，State是Component所持有的一個物件，此物件包含有關Component的數據或信息。
// Component的State改變時，持有此state的所有Components都會全部重新渲染(rerender)。

// 設定State
// const [stateName, setState] = useState(initialValue);
// stateName是這個State的名稱，setName是更新state時所使用的函數。initialValue是stateName這個state的初始值
const Info = () => {
  // 為Info component設定一個名為name的state，更新這個state所使用的函數為setName，"小明"為name這個state的初始值
  const [name, setName] = useState("小明");
  let age = 21;

  // 當按鈕被按下時就會執行這個函式
  const changeNameHandler = () => {
    setName("小明先生"); // 把name這個state的值改成"小明先生"，因為state被更改了，所以這個Info component就會被重新渲染
  };
  return (
    <div className="info">
      <p>朋友名稱:{name}</p>
      <p>朋友年齡:{age}</p>
      <button onClick={changeNameHandler}>改名按鈕</button>
    </div>
  );
};

// expression給我們的應該會是一個[ <p>小明</p> , <p>小華</p> , <p>小張</p>]的array，那我們看到的不是這樣的原因是
// React要去render一個array的時候會把中括號[] , 的部份去掉

export default Info;
