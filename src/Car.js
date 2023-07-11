// 使用Class的方法製作Component
import React from "react";

// 使用class來製作一個Car組件
// React.Component的角色就是一個Parent Class，就是要讓我們製作的新class Car去繼承React.Component的函式。
class Car extends React.Component {
  // 使用Car constractor(class)時傳入的props引數就會帶入React.Component的constructor中使用
  constructor(props) {
    // 這個super代表的就是React.Component的constructor，所以props要放入React.Component的constructor裡面
    // React.Component的constructor有設定this.props = props;，所以這個component就會有props屬性了
    super(props);

    // 設定State : State是Class Component的一個屬性。
    this.state = { color: "red", age: 5 };

    // 要先設定this.changeColor = 當changeColor函式被呼叫時綁定的物件為this(這個Car製作的物件)
    // 這是要在class component使用會用到this關鍵字的函式時要設定的
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor = () => {
    this.setState({ color: "green" });
  };

  // 監控生命週期
  // 在一個 component 被 mount（加入DOM tree中）後，componentDidMount() 會馬上被呼叫。
  componentDidMount() {
    console.log("Car Component確實有被渲染");
  }
  // 在更新後(重新渲染並更新DOM Tree後)馬上被呼叫。這個方法並不會在初次 render時被呼叫。
  componentDidUpdate() {
    console.log("Car Component被更新");
  }

  // 車子顏色的那個backgroundColor的this.state.coloe不用使用{}包起來是因為這不是一個expression而是JS的物件語法
  render() {
    return (
      <div style={{ backgroundColor: "skyblue", color: "grey" }}>
        <p>這台車的ˊ主人是{this.props.owner}</p>
        <p>這台車的品牌是{this.props.brand}</p>
        <p style={{ backgroundColor: this.state.color }}>
          這台車的顏色是:{this.state.color}
        </p>
        <p>這台車的年齡為:{this.state.age}</p>
        <button onClick={this.changeColor}>改變顏色為green</button>
      </div>
    );
  }
}

export default Car;
