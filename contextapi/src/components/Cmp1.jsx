import React from "react";
import Cmp2 from "./Cmp2";
import { useState } from "react";
import UserContext from "../contexts/UserContext";

function Cmp1() {
  const [user, setUser] = useState({ name: "viper", type: "sport" });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Cmp2 />
    </UserContext.Provider>
  );
}

export default Cmp1;
