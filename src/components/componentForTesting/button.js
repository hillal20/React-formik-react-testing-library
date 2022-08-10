import React from "react";
import { useNavigate } from "react-router-dom";
const Mybutton = ({ history, name, doSomething, age }) => {
  const navigate = useNavigate();
  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <button className="btn" onClick={doSomething}>
        <p>{name}</p>
      </button>
      <button className="btn" onClick={doSomething}>
        <p>second button</p>
      </button>
      <span title="spanIsHere" className="nameAge">
        <div> age : {age}</div>
      </span>
      <h1 data-testid="dataTestElement">data test element</h1>
      <button
        onClick={() => {
          navigate("/secondPage");
        }}
      >
        go to second page
      </button>
    </div>
  );
};
export default Mybutton;
