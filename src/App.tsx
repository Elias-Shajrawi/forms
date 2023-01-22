import React from "react";
import { PersonForm } from "./components/person/person.component";

import "./app.css";

export function App() {
  return (
    <div className="main-container">
      <PersonForm className="person-form"></PersonForm>
    </div>
  );
}
