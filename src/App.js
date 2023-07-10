// App.js文件的功能是，製作「App Component」。 App Component的功能是擔任其他所有Component的容器。
// 因為React製作出的網站是一頁式的網頁，所以網頁內容會根據URL改變。根據不同的URL去做相對應的route是App.js的責任。

import Info from "./Info"; // import Info.js export的function或者說div標籤，這樣Info就是一個component
import Nav from "./Nav"; // import Info.js export的function或者說nav標籤，這樣Nav就是一個component

// 每個Component都可以有自己的屬性(Props, properties)。 Props可以由HTML標籤的attributes傳遞給Component。
function App() {
  // button被點擊時用的函式
  let clickButton = (msg) => {
    alert(msg);
  };
  let friends = [
    { name: "小華", age: 16 },
    { name: "小明", age: 17 },
    { name: "小張", age: 18 },
  ];
  return (
    <div>
      <Nav />
      {friends.map((friend) => (
        <Info name={friend.name} age={friend.age} />
      ))}
      <button onClick={() => clickButton("天氣不錯")}>天氣按鈕</button>
      <button onClick={() => clickButton("哈囉!!")}>打招呼按鈕</button>
    </div>
  );
}

export default App;
