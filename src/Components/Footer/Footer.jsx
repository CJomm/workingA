import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  const preventDefault = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="footer"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ccc",
        position: "relative",
        padding: "10px 3%",
        boxSizing: "border-box",
      }}
    >
      <img
        src={logo}
        alt=""
        style={{ width: "160px", cursor: "pointer" }}
        onContextMenu={preventDefault}
      />
      <h6
        style={{
          margin: "10px 0 0",
          textAlign: "center",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "80%",
        }}
      >
        Copyright © 2024 Prodigious Public Relations & Advertising
      </h6>
    </div>
  );
};

export default Footer;
