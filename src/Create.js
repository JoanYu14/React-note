import React, { useState } from "react";

// 利用物件的解構賦值語法把App在使用Create component時給的message(state)與setMessages函式從props物件中取出來並存到messages, setMessages變數中
// 所以在Create組件中也可以使用App的messages這個state與setMessage這個設定messages值的function
const Create = ({ messages, setMessages }) => {
  // 為Create component設定一個名為text的state，更新這個state所使用的函數為setText，空字串""為text這個state的初始值
  const [text, setText] = useState("");

  // 當input的值變更的時候就會執行inputChangeHandeler這個函式
  const inputChangeHandeler = (e) => {
    // 當input標籤有做任何更改的話，text這個state的值都要改成現在input標籤的value
    setText(e.target.value); // e.target就是發生onChange事件的那個element，e.target.value就那個input標籤現在的值。
  };

  const buttonClickHandler = (e) => {
    // 按下按鈕時e就會被帶入event object
    // e.preventDefault()會取消事件的預設行為(交出form)
    e.preventDefault();

    // Spread Syntax(擴展語法)，會把messages裡面的元素放到這個陣列中，然後這個array的最後一個元素就是text這個state現在的值
    // messages這個state就會變成一個陣列，這個陣列的長度就是messages之前的陣列長度+1(text)
    setMessages([...messages, text]);
    setText(""); // 只要按下按鈕後就設定text這個state的值變成""，因為Input標籤的value是text的值，所以input標籤的值就會被刪除
  };

  return (
    <div>
      <form>
        <input type="text" onChange={inputChangeHandeler} value={text} />
        <button onClick={buttonClickHandler}>Submit</button>
      </form>
    </div>
  );
};

export default Create;
