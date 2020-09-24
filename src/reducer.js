export const initState = {
  html:
    localStorage.getItem("html") === "undefined"
      ? ""
      : localStorage.getItem("html"),
  css:
    localStorage.getItem("css") === "undefined"
      ? ""
      : localStorage.getItem("css"),
  js:
    localStorage.getItem("js") === "undefined"
      ? ""
      : localStorage.getItem("js"),
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "html":
      localStorage.setItem("html", action.term);
      return {
        ...state,
        html: action.term,
      };

    case "css":
      localStorage.setItem("css", action.term);
      return {
        ...state,
        css: action.term,
      };

    case "javascript":
      localStorage.setItem("js", action.term);
      return {
        ...state,
        js: action.term,
      };

    default:
      return state;
  }
};
