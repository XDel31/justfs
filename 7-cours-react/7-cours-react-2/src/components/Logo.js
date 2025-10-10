import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Les images qui sont dans le répertoire public sont accessible de partout */}
      <img src="./logo192.png" alt="Logo React" />
      <h3>React World</h3>
    </div>
  );
};

export default Logo;
