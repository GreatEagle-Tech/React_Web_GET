import "./app.css";
import React, { useState, useEffect, useContext } from "react";
import { UserContext4, UserContext5 } from "./Shop";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
function StoreDashboard() {
  const handleClick = useContext(UserContext4);
  const length = useContext(UserContext5);
  return (
    <div>
      <div
        style={{
          backgroundColor: "white",
          width: "full",
          height: "full",
          minHeight: "300%",
        }}
      >
        {" "}
        <React.Fragment>
          <Navbar setShow={false} size={length} />
          <Dashboard handleClick={handleClick} />
        </React.Fragment>
      </div>
    </div>
  );
}

export default StoreDashboard;
