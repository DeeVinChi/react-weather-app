import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        This is an {""}
        <a
          href="https://github.com/DeeVinChi/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-source project
        </a>
        {""} by {""}
        <a
          href="https://uzomachigozirim.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Uzoma Chigozirim
        </a>
      </footer>
    </div>
  );
}
