// Nav.js
import React from "react";

// JSX特殊語法3
// 在JSX內做inline-styling時，需要給style屬性一個expression。這個expression內部需要放入一個物件。
// 所以inline-styling的語法會變成style={{}}。其中，外部的大括號是JSX expression語法，內部的大括號是JavaScript物件語法。
// 因為連字號 (Hyphen)在JavaScript有特殊意義(減法)，所以不能在JavaScript物件的屬性使用連字號。因此，在CSS中具有連字號的屬性都會被換成camelCase的語法，例如：background-color 會需要被寫成 backgroudColor。
const Nav = () => {
  return (
    <nav style={{ backgroundColor: "gray" }}>
      <ul>
        <li>
          <a href="#" style={{ color: "orange" }}>
            首頁
          </a>
        </li>
        <li>
          <a href="#" style={{ color: "orange" }}>
            另一個頁面
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
