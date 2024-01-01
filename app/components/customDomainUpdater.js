// components/CustomDomainUpdater.js
import { useState } from "react";
import axios from "axios";

const CustomDomainUpdater = () => {
  const [route, setRoute] = useState("");
  const [newCustomDomain, setNewCustomDomain] = useState("");

  const handleUpdate = async () => {
    try {
      // Send a POST request to the API route to update the custom domain
      await axios.post("http://localhost:3001/api/updateCustomDomain", {
        route,
        customDomain: newCustomDomain,
      });
      console.log("Custom domain updated successfully.");
    } catch (error) {
      console.error("Error updating custom domain:", error);
    }
  };

  return (
    <div>
      <label>
        Route:
        <input
          type="text"
          value={route}
          onChange={(e) => setRoute(e.target.value)}
        />
      </label>
      <br />
      <label>
        New Custom Domain:
        <input
          type="text"
          value={newCustomDomain}
          onChange={(e) => setNewCustomDomain(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleUpdate}>Update Custom Domain</button>
    </div>
  );
};

export default CustomDomainUpdater;
