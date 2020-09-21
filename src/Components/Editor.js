import React, { useState, useEffect } from "react";
import "./Output";
import EditorComponent from "./EditorComponent";
import "./Editor.css";
import Output from "./Output";

function Editor() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    const set = setTimeout(() => {
      setCode(`
            <html>
            <style>
            ${css}
            </style>
            <body>${html}</body>
            <script>
            ${js}
            </script>
            </html>
        `);
    }, 250);

    return () => clearInterval(set);
  }, [html, css, js]);

  const handleChange = (e) => {
    switch (e.target.id) {
      case "html":
        setHtml(e.target.value);
        break;

      case "css":
        setCss(e.target.value);
        break;

      case "js":
        setJs(e.target.value);
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
        />
        <EditorComponent
          id="css"
          title="CSS"
          onChange={(e) => handleChange(e)}
        />
        <EditorComponent id="js" title="JS" onChange={(e) => handleChange(e)} />
      </div>
      <Output code={code} />
    </div>
  );
}

export default Editor;
