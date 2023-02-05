import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState({
    firstName: "",
    lastName: ""
  });
  const setFullName = (event) => {
    const type = event.target.name;
    const value = event.target.value;
    const newName = { ...name };
    type === "fName" ? (newName.firstName = value) : (newName.lastName = value);
    setName(newName);
  };
  return (
    <div className="container">
      <h1>
        Hello {name.firstName} {name.lastName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={name.firtName}
          onChange={setFullName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={name.lName}
          onChange={setFullName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
