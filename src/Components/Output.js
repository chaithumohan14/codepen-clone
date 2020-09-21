import React from "react";

function Output({ code }) {
  return <iframe title="Output" srcDoc={code} frameBorder="0"></iframe>;
}

export default Output;
