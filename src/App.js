// App.js文件的功能是，製作「App Component」。 App Component的功能是擔任其他所有Component的容器。
// 因為React製作出的網站是一頁式的網頁，所以網頁內容會根據URL改變。根據不同的URL去做相對應的route是App.js的責任。

import Info from "./Info"; // import Info.js export的function或者說div標籤，這樣Info就是一個component
import Nav from "./Nav"; // import Info.js export的function或者說nav標籤，這樣Nav就是一個component

function App() {
  return (
    <div>
      <Nav />
      <Info />
    </div>
  );
}

export default App;
