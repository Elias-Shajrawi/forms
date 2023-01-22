import React, { useState } from "react";
import { IPersonFormProps } from "../../interfaces/props/personFormProps.interface";

export const PersonForm: React.FC<IPersonFormProps> = ({ className }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!name) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
    if (!age) {
      setAgeError("Age is required");
    } else {
      setAgeError("");
    }

    if (age === undefined || isNaN(age) || age <= 0) {
      setAgeError("Age must be a number and greater then 0");
    } else {
      setAgeError("");
    }

    if (age && name) {
      console.log(`Name: ${name}, Age: ${age}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <div className="text-danger">{nameError}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          className="form-control"
          id="age"
          value={age}
          onChange={(e) =>
            setAge(e.target.value ? parseInt(e.target.value) : 0)
          }
        />
        {ageError && <div className="text-danger">{ageError}</div>}
      </div>
      <button type="submit" className="btn btn-primary mt-4">
        Submit
      </button>
    </form>
  );
};
