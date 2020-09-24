import React, { useState, useEffect } from "react";
import "./Output";
import EditorComponent from "./EditorComponent";
import "./Editor.css";
import Output from "./Output";
import { Store } from "../context";

function Editor() {
  const [code, setCode] = useState("");
  const [store, dispatch] = Store();

  useEffect(() => {
    const set = setTimeout(() => {
      setCode(`
            <html>
            <style>
            ${store.css}
            </style>
            <body>${store.html}</body>
            <script>
            ${store.js}
            </script>
            </html>
        `);
    }, 250);

    return () => clearInterval(set);
  }, [store]);

  const handleChange = (id, value) => {
    dispatch({
      type: id,
      term: value,
    });
  };

  return (
    <div className="main">
      <div className="editors">
        <EditorComponent
          id="html"
          title="HTML"
          onChange={handleChange}
          value={store.html}
        />
        <EditorComponent
          id="css"
          title="CSS"
          onChange={handleChange}
          value={store.css}
        />
        <EditorComponent
          id="javascript"
          title="JS"
          onChange={handleChange}
          value={store.js}
        />
      </div>
      <Output code={code} />
    </div>
  );
}

export default Editor;
