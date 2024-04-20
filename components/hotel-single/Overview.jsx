import { useState } from "react";
import { Translate } from "../translate";
const Overview = ({ data }) => {
  const t = Translate().use;
  return (
    <>
      <h3 className="text-22 fw-500 pt-40 border-top-light">{t.overview}</h3>
      <p className="text-dark-1 text-15 mt-20">{data?.overview}</p>

      <p>
        {" "}
        <div dangerouslySetInnerHTML={{ __html: data?.description }} />
      </p>
    </>
  );
};

export default Overview;
