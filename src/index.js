import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./complementos/App";





function Completo(){
  return(
    <div className="final">
      <App />
    </div>
  )
};


ReactDOM.render(<Completo />,document.getElementById("root"));