import React from "react";
import Close from "../Assets/resize-arrows-svgrepo-com.svg";

function EditorComponent({ title, id, onChange }) {
  const resize = (e) => {
    var editor = document.getElementById(id);
    editor.classList.toggle("shrinked");
  };
  return (
    <div className="editor__container">
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
      <textarea
        spellCheck="false"
        className="editor"
        onChange={onChange}
        id={id}
      ></textarea>
    </div>
  );
}

export default EditorComponent;
