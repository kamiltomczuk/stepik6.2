import React from "react";

const Section = ({ data }) => {
  return (
    <section>
      {data.map((obj, i) => (
        <div key={i}>
          <h2>{obj.name}</h2>
          <img
            src={obj.logo}
            alt="/"
            style={{ width: "300px", height: "300px" }}
          />
          <p>{obj.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Section;
