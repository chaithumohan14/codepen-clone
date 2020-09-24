import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-darker.css";
import Close from "../Assets/resize-arrows-svgrepo-com.svg";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/edit/matchtags";
import { Controlled as ControlledEditor } from "react-codemirror2";

function EditorComponent({ title, id, onChange, value }) {
  const modes = { html: "xml", css: "css", javascript: "javascript" };
  const options = {
    mode: modes[id],
    theme: "material-darker",
    lineNumbers: true,
    smartIndent: true,
    scrollbarStyle: "null",
    lineWrapping: true,
    autoCloseTags: true,
    autoCloseBrackets: true,
    matchBrackets: true,
  };
  const resize = (e) => {
    var editor = document.getElementById(id);
    editor.classList.toggle("shrinked");
  };
  return (
    <React.Fragment>
      <div id={id} className="editor__container">
        <div className="title">
          <p className="editor__title">{title}</p>
          <img
            src={Close}
            className="closeButton"
            height="30px"
            width="30px"
            alt=""
            srcSet=""
            onClick={(e) => resize(e)}
          />
        </div>
        <ControlledEditor
          className="editor"
          options={options}
          value={value}
          onBeforeChange={(editor, data, value) => {
            onChange(id, value);
          }}
        />
      </div>
    </React.Fragment>
  );
}

export default EditorComponent;
