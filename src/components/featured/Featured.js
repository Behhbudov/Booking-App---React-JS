import React from "react";
import "./Featured.css";

function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/540x270/654657.webp?k=89856fe34d0c79585591dfb571c096931beeea442ef9175f86cd9960ffb242dd&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Istanbul</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/540x270/691460.jpg?k=f9c2dbc7e62d53ddcffce9765cfa283ac8078633023fed6421485ccf63b1444c&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Tbilisi</h1>
          <h2>532 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/540x270/619923.jpg?k=4fb13225390240a51ee5aa1d76318d03dc0de8a046ddc06e4598f17b287bdcc9&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dubai</h1>
          <h2>533 properties</h2>
        </div>
      </div>
    </div>
  );
}

export default Featured;
