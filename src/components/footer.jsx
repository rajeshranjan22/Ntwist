import React from "react";
import "../styles/footer.css";

//IMAGE AND ICONS
import logo from "../assets/logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="logo" width="150vw" style={{ marginTop: "4rem" }} />
      <ul className="footer-options">
        <a
          href=""
          style={{ textDecoration: "none" }}
        >
          <li className="option">Home</li>
        </a>
        <a
          href=""
          style={{ textDecoration: "none" }}
        >
          <li className="option">About Us</li>
        </a>
        <a
          href=""
          style={{ textDecoration: "none" }}
        >
          <li className="option">Contact Us</li>
        </a>
        <a
          href=""
          style={{ textDecoration: "none" }}
        >
          <li className="option">Privacy Policy</li>
        </a>
        <a
          href=""
          style={{ textDecoration: "none" }}
        >
          <li className="option">Sitemap</li>
        </a>
      </ul>
      <p className="address">9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
      <div className="socials">
        <TwitterIcon
          style={{ color: "white", marginRight: "3rem", fontSize: "1.3rem" }}
        />
        <LinkedInIcon style={{ color: "white", fontSize: "1.3rem" }} />
      </div>
      <p className="address" style={{ marginBottom: "5rem" }}>
        © 2022. Ntwist Inc.
      </p>
    </div>
  );
}

export default Footer;
