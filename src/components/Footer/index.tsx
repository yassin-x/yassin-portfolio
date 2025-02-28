import React from "react";

export default function Footer() {
  const socialLinks = [
    { name: "Facebook", link: "https://www.facebook.com" },
    { name: "Twitter", link: "https://www.twitter.com" },
    { name: "Instagram", link: "https://www.instagram.com" },
    { name: "Linkedin", link: "https://www.linkedin.com" },
    { name: "Github", link: "https://www.github.com" },
  ];
  const moreLinks = [
    { name: "Privacy Policy", link: "https://www.privacypolicy.com" },
    { name: "Terms of Service", link: "https://www.termservice.com" },
    { name: "Contact Us", link: "https://www.contactus.com" },
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
            <h3 className="text-lg font-semibold text-primary mb-2 italic">
              Social Links
            </h3>
            <ul className="flex flex-wrap justify-center md:justify-start gap-4">
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
          {/* More Links */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-2 italic">
              More Links
            </h3>
            <ul className="flex flex-wrap justify-center md:justify-start gap-4">
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
