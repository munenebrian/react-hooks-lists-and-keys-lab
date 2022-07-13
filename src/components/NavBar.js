import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const array = links.map((link)=>(<a key={link}href={"#" + link}>{link}</a>))

  return <nav>{array}</nav>;
}

export default NavBar;
