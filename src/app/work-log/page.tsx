"use client";

import { useState } from "react";

export default function WorkLog() {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Work Log Page</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}</p>
    </div>
  );
}
