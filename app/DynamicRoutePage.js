// pages/DynamicRoutePage.js
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const DynamicRoutePage = () => {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleButtonClick = () => {
    // Navigate to the dynamic route with the provided name
    router.push(`/greet/${name}`);
  };

  return (
    <div>
      <h1>Dynamic Route Page</h1>
      <label>
        Enter your name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button onClick={handleButtonClick}>Greet</button>

      {/* Display the dynamic greeting */}
      {name && <p>Hi, {name}!</p>}
    </div>
  );
};

export default DynamicRoutePage;
