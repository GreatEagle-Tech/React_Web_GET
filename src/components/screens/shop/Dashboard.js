import React, { useState } from "react";
import list from "../../../DUMMY_DATA/data";
import Items from "./Items";
import "./dashboard.css";

function Dashboard({ handleClick }) {
  return (
    <section>
      {list.map((item) => (
        <Items key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
}

export default Dashboard;