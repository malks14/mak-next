import React from "react";
import api from "./api/api";
import Head from "./Head";

const page = async () => {
  const links = await api.links.fetch();
  console.log("soy libn", links);
  return (
    <div>
      <Head title="Links MAK" />
      <ul>
        {links.map((link) => (
          <li key={link.url}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
