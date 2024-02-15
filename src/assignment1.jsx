import React from "react";

const Logo = () => {
  const wrapperStyle = {
    backgroundColor: "#3A3A3C",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const squareStyle = {
    width: "200px",
    height: "200px",
    position: "relative",
    borderStyle: "solid",
    borderWidth: "20px",
    borderBottomColor: "blue",
    borderRightColor: "grey",
    borderTopColor: "orange",
    borderLeftColor: "lightgreen",
    transform: "rotate(45deg)",
  };

  const textStyle = {
    position: "absolute",
    top: "30%",
    right: "20%",
    color: "white",
    fontSize: "20px",
    transform: "rotate(-45deg)",
  };

  const comment = {
    position: "absolute",
    top: "50%",
    right: "25%",
    color: "white",
    fontSize: "10px",
    transform: "rotate(-45deg)",
  };

  const creator = {
    position: "absolute",
    bottom: "5%",
    right: "47%",
    color: "white",
    fontSize: "15px",
  };

  return (
    <div style={wrapperStyle}>
      <div style={squareStyle}>
        <p style={textStyle}>
          HTML<span style={{ color: "orange", fontWeight: "bold" }}>&</span>CSS
        </p>
        <p style={comment}>design and build</p>
      </div>
      <div style={creator}>JON DUCKLET</div>
    </div>
  );
};

export default Logo;
