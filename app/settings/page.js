// pages/settings.js
"use client";
import { useState } from "react";
import axios from "axios";

const SettingsPage = () => {
  const [customDomain, setCustomDomain] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSave = async () => {
    try {
      setIsLoading(true);
      setSuccessMessage("");
      setErrorMessage("");

      // Make the API request to save the custom domain
      await axios.post("http://localhost:3001/api/updateCustomDomain", {
        route: "aliza",
        customDomain,
      });

      setSuccessMessage("Custom domain saved successfully!");
      setCustomDomain(""); // Clear the input field on success
    } catch (error) {
      console.error("Error saving custom domain:", error);
      setErrorMessage(
        `Error saving custom domain. Please try again. ${error.message || ""}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Settings</h1>
      <label>
        Custom Domain:
        <input
          type="text"
          value={customDomain}
          onChange={(e) => setCustomDomain(e.target.value)}
        />
      </label>
      <button onClick={handleSave} disabled={isLoading}>
        {isLoading ? "Saving..." : "Save"}
      </button>

      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default SettingsPage;
