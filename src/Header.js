import React from "react";
import "./styles.css";

function Header() {
  return (
    <header>
      <img
        src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
        alt="Troll"
      />
      <div className="header-text">
        <h1>Meme Generator</h1>
        <p>
          Tutorial:{" "}
          <a href="https://www.youtube.com/watch?v=DLX62G4lc44&t=17524s">
            freeCodeCamp
          </a>
        </p>
      </div>
    </header>
  );
}

export default Header;
