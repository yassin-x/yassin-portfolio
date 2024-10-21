import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState(""); // حالة جديدة لتخزين رسالة الحالة

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_sm8b58e",
        "template_wdrrvdv",
        formData,
        "ua3Q9xPz3xysBapbf"
      )
      .then((response) => {
        setStatusMessage("Done Send Message!");
      })
      .catch((err) => {
        setStatusMessage("Failed Send Message!");
      });

    setFormData({ name: "", email: "", phone: "", message: "" });

    setTimeout(() => {
      setStatusMessage("");
    }, 60000);
  };

  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
      {/* قسم Email Contact */}
      <div className="flex flex-col items-center justify-center p-4 bg-[#0C0C0C] text-white">
        <h2 className="text-2xl font-bold">Email Contact</h2>
        <p className="mt-2">You can contact us via email.</p>
      </div>

      <div className="flex flex-col justify-center p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded bg-[#481E14] text-white"
            />
          </div>
          <div>
            <label className="block">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded bg-[#481E14] text-white"
            />
          </div>
          <div>
            <label className="block">Phone Number:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded bg-[#481E14] text-white"
            />
          </div>
          <div>
            <label className="block">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded bg-[#481E14] text-white"
            />
          </div>
          <button type="submit" className="p-2 text-white bg-[#9B3922] rounded">
            Send
          </button>
        </form>
        {statusMessage && (
          <p className="mt-2 text-center text-white">{statusMessage}</p>
        )}
      </div>
    </div>
  );
}
