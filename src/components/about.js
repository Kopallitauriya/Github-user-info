import { Auth0Context } from "@auth0/auth0-react";
import React from "react";

const About = ({ flag }) => {
  console.log(flag);
  return (
    <section>
      <h4 style={{ textAlign: "center", marginTop: "1rem" }}>
        {" "}
        Developed By:Kopal Litauriya{" "}
      </h4>
      <p style={{ textAlign: "center" }}>
        <a href="https://github.com/kopallitauriya/Github-user-info">
          GitHub Source Code{" "}
        </a>
      </p>
      
    </section>
  );
};
export default About;
