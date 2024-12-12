// src/pages/api/contact.js
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Handle the contact form data (e.g., save it to a database or send an email)
    try {
      // Replace with your form handling logic (e.g., email or database saving)
      console.log("Contact form submission:", { name, email, message });

      // Respond with a success message
      res.status(200).json({ message: "Your message has been sent!" });
    } catch (error) {
      res.status(500).json({ error: "Something went wrong. Please try again." });
    }
  } else {
    // Handle unsupported HTTP methods
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
