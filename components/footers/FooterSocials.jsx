import React from "react";

export default function FooterSocials() {
  const socials = [
    { name: "Instagram", icon: "fa-instagram", url: "https://www.instagram.com/sneakerrestore.ro?igsh=MXg0Z3l5c3Z1ZWZrbg%3D%3D&utm_source=qr" },
   { name: "TikTok", icon: "fa-tiktok", url: "https://www.tiktok.com/@sneakerrestore.ro?_t=ZN-8y7nwlsWOgA&_r=1" },
    { name: "Facebook", icon: "fa-facebook", url: "https://www.facebook.com/share/16XBPmvxB1/?mibextid=wwXIfr" },
    {/* name: "YouTube", icon: "fa-youtube", url: "#" },
    { name: "Pinterest", icon: "fa-pinterest", url: "#" },
    { name: "LinkedIn", icon: "fa-linkedin", url: "#" */},
  ];

  return (
    <>
      {socials.map((social, index) => (
        <li key={index}>
          <a href={social.url} rel="noopener nofollow" target="_blank">
            <i className={social.icon} /> {social.name}
          </a>
        </li>
      ))}
    </>
  );
}
