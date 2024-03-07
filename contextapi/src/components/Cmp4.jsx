import React from "react";
import { useUser } from "../contexts/UserContext";

function Cmp4() {
  const { user, setUser } = useUser();

  const handleclick = () => {
    setUser({ name: "Dodge", type: "hyper" });
  };

  return (
    <div>
      <h1>Nama : {user.name}</h1>
      <h1>Type: {user.type}</h1>
      <button onClick={handleclick}>cilck </button>
    </div>
  );
}

export default Cmp4;
