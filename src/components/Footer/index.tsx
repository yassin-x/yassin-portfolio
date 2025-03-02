import React from "react";

export default function Footer() {
  const socialLinks = [
    { name: "Facebook", link: "https://www.facebook.com/yassen.ibrahim.hamed" },
    {
      name: "Instagram",
      link: "https://www.instagram.com/yassen.ibrahim.hamed/",
    },
    { name: "Linkedin", link: "https://www.linkedin.com/in/yassin-ibrahim-x/" },
    { name: "Github", link: "https://github.com/yassin-x" },
  ];
  const moreLinks = [
    { name: "Call Me : +201096492845", link: "tel:+201096492845" },
    {
      name: "yassin.ibrahim.hamed@gmail.com",
      link: "mailto:yassin.ibrahim.hamed@gmail.com",
    },
  ];
  return (
    <footer className="py-6 bg-primary/10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-primary">Yassin Ibrahim</h3>
            <p className="text-sm text-gray-400">
              &copy; 2025 All Rights Reserved
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary mb-2">
              Social Links
            </h3>
            <ul className="flex flex-col justify-center md:justify-start gap-2">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary mb-2">
              More Links
            </h3>
            <ul className="flex flex-col justify-center md:justify-start gap-2">
              {moreLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
