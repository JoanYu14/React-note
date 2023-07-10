// Info.js
import React, { useState } from "react";
import "./styles/style.css"; // 直接import就可以套用style.css的樣式，在style.css裡面有設定class為info的標籤的樣式

// State(狀態)
// 在React當中，State是Component所持有的一個物件，此物件包含有關Component的數據或信息。
// Component的State改變時，持有此state的所有Components都會全部重新渲染(rerender)。

// 把從App使用Info組件時給的message(值就是messages這個App的state)從props物件裡面拿出來，存到名為message的變數中
const Info = ({ messages }) => {
  return (
    <div className="info">
      {messages.map((msg, index) => {
        return <p key={index}>訊息為:{msg}</p>;
      })}
    </div>
  );
};

// expression給我們的應該會是一個[ <p>小明</p> , <p>小華</p> , <p>小張</p>]的array，那我們看到的不是這樣的原因是
// React要去render一個array的時候會把中括號[] , 的部份去掉

export default Info;
