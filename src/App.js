// App.js文件的功能是，製作「App Component」。 App Component的功能是擔任其他所有Component的容器。
// 因為React製作出的網站是一頁式的網頁，所以網頁內容會根據URL改變。根據不同的URL去做相對應的route是App.js的責任。

import React, { useState } from "react";
import Info from "./Info"; // import Info.js export的function或者說div標籤，這樣Info就是一個component
import Create from "./Create";

function App() {
  // 這是我們把原本應該在Create的state往上拉到App這裡來
  // 為App component設定一個名為messages的state，更新這個state所使用的函數為setMessages，空陣列[]為messages這個state的初始值
  // 設定為空陣列是因為要讓messages存所有按下按鈕時input的值
  const [messages, setMessages] = useState([]);

  // 把messages這個state與setMessages這個function用props的方式傳遞給Create component
  // 再把messages這個state用props的方式傳遞給Info component
  return (
    <div>
      <Create messages={messages} setMessages={setMessages} />
      <Info messages={messages} />
    </div>
  );
}

export default App;
