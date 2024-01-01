// const GreetPage = ({ params }) => {
//   return (
//     <div>
//       <h1>Greet Page</h1>
//       <p>Hi, {params.name}!</p>
//     </div>
//   );
// };
// export default GreetPage;
// pages/greet/[name].js
"use client";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const GreetPage = ({ params }) => {
//   const router = useRouter();
//   // const { name } = router;
//   const [customDomain, setCustomDomain] = useState("");

//   useEffect(() => {
//     // Fetch custom domains from the backend
//     const fetchCustomDomains = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3001/api/customDomains"
//         );
//         const customDomains = response.data;

//         // Find the custom domain for the current route (if available)
//         const currentRouteCustomDomain = customDomains.find(
//           (domain) => domain.route === name
//         );

//         if (currentRouteCustomDomain) {
//           setCustomDomain(currentRouteCustomDomain.customDomain);
//         }
//       } catch (error) {
//         console.error("Error fetching custom domains:", error);
//       }
//     };

//     fetchCustomDomains();
//   }, [params.name]);

//   return (
//     <div>
//       <h1>Greet Page</h1>
//       <p>
//         Hi, {params.name}! This content is associated with the custom domain:{" "}
//         {customDomain}
//       </p>
//     </div>
//   );
// };

// export default GreetPage;
// pages/greet/[name].js

import { useEffect, useState } from "react";
import axios from "axios";

const GreetPage = () => {
  const [customDomains, setCustomDomains] = useState([]);

  useEffect(() => {
    const fetchCustomDomains = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/customDomains"
        );
        setCustomDomains(response.data);
      } catch (error) {
        console.error("Error fetching custom domains:", error);
      }
    };

    fetchCustomDomains();
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <div>
      <h1>Greet Page</h1>
      <p>Hi, Aliza! This content is associated with the custom domains:</p>
      <ul>
        {customDomains.map((domain) => (
          <li key={domain._id}>{domain.customDomain}</li>
        ))}
      </ul>
    </div>
  );
};

export default GreetPage;
