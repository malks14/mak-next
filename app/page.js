import React from "react";
import api from "./api";

const page = async () => {
  const links = await api.links.fetch();
  console.log("soy libn", links);
  return (
    <ul>
      {links.map((link) => (
        <li key={link.PÁGINAS}>
          <a href={link.PÁGINAS}>{link.PÁGINAS}</a>
        </li>
      ))}
    </ul>
  );
};

export default page;
