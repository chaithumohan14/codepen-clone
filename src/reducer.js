export const initState = {
  html: localStorage.getItem("html") || "",
  css: localStorage.getItem("css") || "",
  js: localStorage.getItem("js") || "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "html":
      localStorage.setItem("html", action.html);
      return {
        ...state,
        html: action.html,
      };
    case "css":
      localStorage.setItem("css", action.css);

      return {
        ...state,
        css: action.css,
      };
    case "js":
      localStorage.setItem("js", action.js);

      return {
        ...state,
        js: action.js,
      };

    default:
      return state;
  }
};
