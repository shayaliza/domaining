// pages/api/saveDomain.js
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { customDomain } = req.body;

    // Perform your logic to save the custom domain to the database or backend
    // Example: Save to a database
    // await saveCustomDomainToDatabase(customDomain);

    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
