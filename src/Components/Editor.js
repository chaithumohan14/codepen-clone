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

  const handleChange = (e) => {
    switch (e.target.id) {
      case "html":
        dispatch({
          type: "html",
          html: e.target.value,
        });
        break;

      case "css":
        dispatch({
          type: "css",
          css: e.target.value,
        });
        break;

      case "js":
        dispatch({
          type: "js",
          js: e.target.value,
        });
        break;

      default:
        console.log("Hello");
        break;
    }
  };

  return (
    <div className="main">
      <div className="editors">
        <EditorComponent
          id="html"
          title="HTML"
          onChange={(e) => handleChange(e)}
          value={store.html}
        />
        <EditorComponent
          id="css"
          title="CSS"
          onChange={(e) => handleChange(e)}
          value={store.css}
        />
        <EditorComponent
          id="js"
          title="JS"
          onChange={(e) => handleChange(e)}
          value={store.js}
        />
      </div>
      <Output code={code} />
    </div>
  );
}

export default Editor;
