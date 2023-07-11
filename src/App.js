// App.js文件的功能是，製作「App Component」。 App Component的功能是擔任其他所有Component的容器。
// 因為React製作出的網站是一頁式的網頁，所以網頁內容會根據URL改變。根據不同的URL去做相對應的route是App.js的責任。

import React, { useState } from "react";
import Info from "./Info"; // import Info.js export的function或者說div標籤，這樣Info就是一個component
import Create from "./Create";
import Car from "./Car";

// Create React App 並不自動包含page routing的功能，所以最解決方案是使用 react-router-dom這個package。
// 從react-router-dom這個package裡面import 1.BrowserRouter 2.Routes 3.Route
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Page404 from "./Page404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

// 這是練習State Lifting的程式碼
// function App() {
//   // 這是我們把原本應該在Create的state往上拉到App這裡來
//   // 為App component設定一個名為messages的state，更新這個state所使用的函數為setMessages，空陣列[]為messages這個state的初始值
//   // 設定為空陣列是因為要讓messages存所有按下按鈕時input的值
//   const [messages, setMessages] = useState([]);

//   // 把messages這個state與setMessages這個function用props的方式傳遞給Create component
//   // 再把messages這個state用props的方式傳遞給Info component
//   return (
//     <div>
//       <Create messages={messages} setMessages={setMessages} />
//       <Info messages={messages} />
//     </div>
//   );
// }

// // 這是練習Class Component的程式碼
// // brand與owner會傳到Car組件的props物件中
// function App() {
//   return (
//     <div>
//       <Car brand="TOYOTA" owner="Joan" />
//       <Car brand="BMW" owner="Kevin" />
//     </div>
//   );
// }
